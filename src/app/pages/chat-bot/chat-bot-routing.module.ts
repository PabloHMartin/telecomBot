import { IncidenciasComponent } from './pages/incidencias/incidencias.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatBotComponent } from './chat-bot.component';

const routes: Routes = [
  { path: '', component: ChatBotComponent,
    children: [
      {path: '', component: HomePageComponent},
      { path: 'facturas', component: InvoicesComponent },
      { path: 'incidencias', component: IncidenciasComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatBotRoutingModule { }
