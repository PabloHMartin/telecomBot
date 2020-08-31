import { SharedModule } from './../../shared/shared.module';
import { ChatHumanComponent } from './chat-human.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChatHumanComponent, }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class ChatHumanModule {}
