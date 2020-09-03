import { ChatWindowComponent } from './../chat-window/chat-window.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NbWindowService, NbWindowConfig} from '@nebular/theme';

@Component({
  selector: 'app-chat-window-modal',
  templateUrl: './chat-window-modal.component.html',
  styleUrls: ['./chat-window-modal.component.scss']
})
export class ChatWindowModalComponent implements OnInit {

  @Output() linkUrlEventMobile = new EventEmitter<string>();


  constructor(private windowService: NbWindowService) { }

  ngOnInit(): void {
  }

  // send an eventEmmiter in NbWindowService context property so that we can get events for mobile
  openWindow(): void {
    const searchContext = new MessagesWindowContext();
    this.windowService.open(ChatWindowComponent, {  context: searchContext });

    searchContext.onMessageEmitted.subscribe( value => {
     this.navigateToUrl(value);
    });
  }

  navigateToUrl($event): void{
    this.linkUrlEventMobile.emit($event);
  }

}


export class MessagesWindowContext {
  onMessageEmitted = new EventEmitter();
}
