import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailItemComponent } from './mail-item/mail-item.component';
import { MailComponent } from './mail.component';

const routes: Routes = [
  {
    path: '',
    component: MailComponent,
    children: [{
      path: 'list',
      component: MailListComponent
    }, {
      path: 'item/:id',
      component: MailItemComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }
