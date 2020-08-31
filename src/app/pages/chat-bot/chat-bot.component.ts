import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  navigateToUrl($event): void{
    this.router.navigate([$event]);
  }



}
