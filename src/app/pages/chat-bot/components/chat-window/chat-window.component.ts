import { ChatbotService } from './../../services/chatbot.service';
import { Component, OnInit, Output, EventEmitter, OnDestroy, Input, Inject, Optional } from '@angular/core';
import { Subscription } from 'rxjs';
import { NB_WINDOW_CONTEXT } from '@nebular/theme';

export interface WebhookPayload{
  kind?: string;
  fields?: any;
}
export interface WebhookPayloadfields{
  linkUrl?: string;
}
@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})

// ChatWindowComponent has its own service because of cohesion
export class ChatWindowComponent implements OnInit, OnDestroy  {

  @Output() linkUrlEvent = new EventEmitter<string>();

  subscriptions: Subscription[];

  messages = [];
  loading = false;

  // Random ID to maintain session with DialogFlow server
  sessionId = Math.random().toString(36).slice(-5);

    // send an eventEmmiter in NbWindowService context property so that we can get events for mobile
  constructor(
    @Inject(NB_WINDOW_CONTEXT) @Optional() private context: MessagesWindowContext,
    private chatbotService: ChatbotService) { }

  ngOnInit(): void {
    this.addBotMessage('Bienvenido al asistente virtual de facturación 🤖. ¿ En qué te ayudo? ');
    this.subscriptions = [];
  }

  handleUserMessage(event): void {
    console.log('event: ', event);
    const text = event.message;
    this.addUserMessage(text);

    this.loading = true;

    this.subscriptions.push(this.chatbotService.botGateWay(text, this.sessionId)
      .subscribe(res => {
        const { fulfillmentText } = res;
        const { webhookPayload } = res;
        if (webhookPayload){
          this.handleWebhookPayload(webhookPayload);
        }
        this.addBotMessage(fulfillmentText);
        this.loading = false;
      })
    );
  }

  handleWebhookPayload(webhookPayload: WebhookPayload): void{
      const webhookPayloadfields: WebhookPayloadfields = this.processCustomPayloadMessage(webhookPayload.fields);
      if (webhookPayloadfields.linkUrl && webhookPayloadfields.linkUrl != null){
        this.linkUrlEvent.emit(webhookPayloadfields.linkUrl);
        this.emitMobileMessage(webhookPayloadfields.linkUrl);
      }
  }


  emitMobileMessage(linkUrl: string): void {
    if (this.context){
      this.context.onMessageEmitted.next(linkUrl);
    }
  }

  addUserMessage(text): void {
    this.messages.push({
      text,
      sender: 'You',
      reply: true,
      date: new Date()
    });
  }

  addBotMessage(text): void {
    this.messages.push({
      text,
      sender: 'Bot',
      avatar: '../../../../../assets/img/bot.svg',
      date: new Date()
    });
  }


  processCustomPayloadMessage(object: WebhookPayload): any {

      let outputMessage = Array.isArray(object) ? [] : {};
      Object.entries(object).forEach(([key, value]) => {
        if (value.kind === 'structValue') {
          outputMessage[key] = this.processCustomPayloadMessage(value.structValue.fields);
        } else if (value.kind === 'listValue') {
          outputMessage[key] = this.processCustomPayloadMessage(value.listValue.values);
        } else if (value.kind === 'stringValue') {
          outputMessage[key] = value.stringValue;
        } else if (value.kind === 'boolValue') {
          outputMessage[key] = value.boolValue;
        } else if (value.kind === 'numberValue') {
          outputMessage[key] = value.numberValue;
        } else {
          outputMessage[key] = value;
        }
      });
      return outputMessage;
    }

  ngOnDestroy(): void {
    this.subscriptions.forEach( sub => sub.unsubscribe());
  }
}


export class MessagesWindowContext {
  onMessageEmitted = new EventEmitter();
}
