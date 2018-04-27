import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './shared/guards/authenticated.guard';
import { AnonymousGuard } from './shared/guards/anonymous.guard';
import { LoginFormComponent } from './login-form/login-form.component';
import { MailModule } from './mail/mail.module';
import { ContactModule } from './contact/contact.module';
import { TestModule } from './test/test.module';



const routes: Routes = [
  {
    path: 'mail',
    loadChildren: () => MailModule,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'contacts',
    loadChildren: () => ContactModule,
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
    loadChildren: () => TestModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
