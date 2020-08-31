import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/chat-bot/chat-bot.module').then(m => m.ChatBotModule) },
  { path: 'humanchat', loadChildren: () => import('./pages/chat-human/chat-human.module').then(m => m.ChatHumanModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
