import { HomePageComponent } from './components/home-page/home-page.component';
import { VisualOutputComponent } from './components/visual-output/visual-output.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatBotComponent } from './chat-bot.component';

const routes: Routes = [
  { path: '', component: ChatBotComponent,
    children: [
      {path: '', component: HomePageComponent},
      { path: 'facturas', component: VisualOutputComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatBotRoutingModule { }
