import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MailComponent } from './mail/mail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthenticatedGuard } from './shared/guards/authenticated.guard';
import { AnonymousGuard } from './shared/guards/anonymous.guard';
import { MainComponent } from './main/main.component';
import { LoginFormComponent } from './login-form/login-form.component';


const routes: Routes = [
  {
    path: 'mail',
    component: MailComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: '',
    component: MainComponent
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
