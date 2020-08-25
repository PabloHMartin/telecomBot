import { ChatbotService } from './../../services/chatbot.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  messages = [];
  loading = false;

  // Random ID to maintain session with server
  sessionId = Math.random().toString(36).slice(-5);

  constructor(private chatbotService: ChatbotService) { }

  ngOnInit(): void {
    this.addBotMessage('Bienvenido al asistente virtual de facturación 🤖. ¿ En qué te ayudo? ');
  }

  handleUserMessage(event): void {
    console.log('event: ', event);
    const text = event.message;
    this.addUserMessage(text);

    this.loading = true;

    this.chatbotService.botGateWay(text, this.sessionId)
    .subscribe(res => {
      const { fulfillmentText } = res;
      console.log(res);

      this.addBotMessage(fulfillmentText);
      this.loading = false;
    });
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

}
