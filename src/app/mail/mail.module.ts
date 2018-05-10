import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MailComponent } from './mail.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailItemComponent } from './mail-item/mail-item.component';
import { MailRoutingModule } from './mail-routing.module';
import { NewMailComponent } from './new-mail/new-mail.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DateFromMsPipe } from './date-from-ms.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MailRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    MailListComponent,
    MailItemComponent,
    MailComponent,
    NewMailComponent,
    DateFromMsPipe
  ]
})
export class MailModule { }
