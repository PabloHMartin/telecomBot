import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatBotRoutingModule } from './chat-bot-routing.module';
import { ChatBotComponent } from './chat-bot.component';
import { SpeechComponent } from './components/speech/speech.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { VisualOutputComponent } from './components/visual-output/visual-output.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatbotService } from './services/chatbot.service';


@NgModule({
  declarations: [ChatBotComponent, SpeechComponent, ConversationComponent, VisualOutputComponent, ChatWindowComponent],
  imports: [
    CommonModule,
    ChatBotRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    ChatbotService
  ]
})
export class ChatBotModule { }
