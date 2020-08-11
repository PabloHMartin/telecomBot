import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatBotRoutingModule } from './chat-bot-routing.module';
import { ChatBotComponent } from './chat-bot.component';
import { SpeechComponent } from './components/speech/speech.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { VisualOutputComponent } from './components/visual-output/visual-output.component';


@NgModule({
  declarations: [ChatBotComponent, SpeechComponent, ConversationComponent, VisualOutputComponent],
  imports: [
    CommonModule,
    ChatBotRoutingModule,
    SharedModule
  ]
})
export class ChatBotModule { }
