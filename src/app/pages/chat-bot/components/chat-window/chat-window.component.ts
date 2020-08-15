import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const dialogflowURL = 'https://us-central1-phmartinchatbot.cloudfunctions.net/dialogflowGateway';

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.addBotMessage('Bienvenido al asistente virtual de facturación 🤖. ¿ En qué te ayudo? ');
  }

  handleUserMessage(event): void {
    console.log(event);
    const text = event.message;
    this.addUserMessage(text);

    this.loading = true;

    // Make the request
    this.http.post<any>(
      dialogflowURL,
      {
        sessionId: this.sessionId,
        queryInput: {
          text: {
            text,
            languageCode: 'es-ES'
          }
        }
      }
    )
    .subscribe(res => {
      const { fulfillmentText } = res;
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
