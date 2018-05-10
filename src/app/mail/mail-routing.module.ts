import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailItemComponent } from './mail-item/mail-item.component';
import { MailComponent } from './mail.component';
import { NewMailComponent } from './new-mail/new-mail.component';

const routes: Routes = [
  {
    path: '',
    component: MailComponent,
    children: [
      {
        path: 'inbox',
        component: MailListComponent
      },
      {
        path: 'sent',
        component: MailListComponent
      },
      {
        path: 'item/:page/:id',
        component: MailItemComponent
      },
      {
        path: 'new',
        component: NewMailComponent
      }, {
        path: '',
        redirectTo: 'inbox',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }
