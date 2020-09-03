import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbChatModule, NbSpinnerModule, NbCardModule, NbWindowModule } from '@nebular/theme';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NbIconModule } from '@nebular/theme';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


const components = [ShellComponent];

const modules = [
  CommonModule,
  RouterModule,
  LayoutModule,
  NbEvaIconsModule,
  NbChatModule,
  NbSpinnerModule,
  MatToolbarModule,
  NbCardModule,
  NbEvaIconsModule,
  NbIconModule,
  MatTableModule,
  NbWindowModule,
  MatButtonModule,
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
