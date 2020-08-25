import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbChatModule, NbSpinnerModule } from '@nebular/theme';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar'


const components = [ShellComponent];

const modules = [
  CommonModule,
  RouterModule,
  LayoutModule,
  NbEvaIconsModule,
  NbChatModule,
  NbSpinnerModule,
  MatToolbarModule
];



@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules
  ]
})
export class SharedModule { }
