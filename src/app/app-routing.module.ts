import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MailComponent } from './mail/mail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthenticatedGuard } from './shared/guards/authenticated.guard';
import { MainComponent } from './main/main.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
