import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-human',
  templateUrl: './chat-human.component.html',
  styleUrls: ['./chat-human.component.scss']
})
export class ChatHumanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.sendMessage( {message: 'Buenas días soy Pablo del departamento de facturación, ¿ en que te ayudo?'}, 'Agente', '', false);

  }

  messages: any[] = [];

  sendMessage(event: any, userName: string, avatar: string, reply: boolean) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: reply,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: userName,
        avatar: avatar,
      },
    });
  }

}
