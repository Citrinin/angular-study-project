import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MailComponent } from './mail.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailItemComponent } from './mail-item/mail-item.component';
import { MailRoutingModule } from './mail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MailRoutingModule
  ],
  declarations: [
    MailListComponent,
    MailItemComponent,
    MailComponent
  ]
})
export class MailModule { }
