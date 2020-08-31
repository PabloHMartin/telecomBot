import { DbService } from './services/db.service';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatBotRoutingModule } from './chat-bot-routing.module';
import { ChatBotComponent } from './chat-bot.component';
import { SpeechComponent } from './components/speech/speech.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatbotService } from './services/chatbot.service';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ChartsModule } from 'ng2-charts';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { ChartComponent } from './pages/invoices/components/chart/chart.component';
import { InvoiceListComponent } from './pages/invoices/components/invoice-list/invoice-list.component';
import { InvoiceInfoComponent } from './pages/invoices/components/invoice-info/invoice-info.component';
import { IncidenciasComponent } from './pages/incidencias/incidencias.component';
import { IncidenciasListComponent } from './pages/incidencias/components/incidencias-list/incidencias-list.component';

@NgModule({
  declarations: [
    ChatBotComponent,
    SpeechComponent,
    ChatWindowComponent,
    HomePageComponent,
    InvoicesComponent,
    ChartComponent,
     InvoiceListComponent,
     InvoiceInfoComponent,
     IncidenciasComponent,
     IncidenciasListComponent
    ],
  imports: [
    CommonModule,
    ChatBotRoutingModule,
    SharedModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    ChatbotService,
    DbService
  ]
})
export class ChatBotModule { }
