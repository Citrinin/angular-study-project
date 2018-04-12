import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MailComponent } from './mail/mail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthenticatedGuard } from './shared/guards/authenticated.guard';
import { AnonymousGuard } from './shared/guards/anonymous.guard';
import { MainComponent } from './main/main.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MailListComponent } from './mail/mail-list/mail-list.component';
import { MailItemComponent } from './mail/mail-item/mail-item.component';


const routes: Routes = [
  {
    path: 'mail',
    component: MailComponent,
    canActivate: [AuthenticatedGuard],
    children: [{
      path: 'list',
      component: MailListComponent
    }, {
      path: 'item/:id',
      component: MailItemComponent
    }]
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginFormComponent,
    canActivate: [AnonymousGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
