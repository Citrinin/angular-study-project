import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './shared/guards/authenticated.guard';
import { AnonymousGuard } from './shared/guards/anonymous.guard';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {
    path: 'mail',
    loadChildren: 'app/mail/mail.module#MailModule',
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'contacts',
    loadChildren: 'app/contact/contact.module#ContactModule',
    canActivate: [AuthenticatedGuard],
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
  {
    path: 'test',
    loadChildren: 'app/test/test.module#TestModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
