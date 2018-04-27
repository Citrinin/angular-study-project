import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MailComponent } from './mail/mail.component';
// import { ContactsComponent } from './contact/contacts.component';
import { AuthenticatedGuard } from './shared/guards/authenticated.guard';
import { AnonymousGuard } from './shared/guards/anonymous.guard';
import { LoginFormComponent } from './login-form/login-form.component';
// import { MailListComponent } from './mail/mail-list/mail-list.component';
// import { MailItemComponent } from './mail/mail-item/mail-item.component';
// import { TestComponent } from './test/test.component';
// import { TestDirectiveComponent } from './test/test-directive/test-directive.component';
// import { TestStructuralDirectiveComponent } from './test/test-structural-directive/test-structural-directive.component';
// import { AddContactComponent } from './contact/add-contact/add-contact.component';
// import { ContactsListComponent } from './contact/contacts-list/contacts-list.component';
import { MailModule } from './mail/mail.module';
import { ContactModule } from './contact/contact.module';
import { TestModule } from './test/test.module';



const routes: Routes = [
  {
    path: 'mail',
    // loadChildren: 'app/test/test.module#MailModule',
    loadChildren: () => MailModule,
    // component: MailComponent,
    canActivate: [AuthenticatedGuard],
    // children: [{
    //   path: 'list',
    //   component: MailListComponent
    // }, {
    //   path: 'item/:id',
    //   component: MailItemComponent
    // }]
  },
  {
    path: 'contacts',
    // loadChildren: 'app/contact/contact.module#ContactModule',
    loadChildren: () => ContactModule,
    // component: ContactsComponent,
    canActivate: [AuthenticatedGuard],
    // children: [{
    //   path: 'list',
    //   component: ContactsListComponent
    // }, {
    //   path: 'add',
    //   component: AddContactComponent
    // }]
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
    // loadChildren: 'app/test/test.module#TestModule',
    loadChildren: () => TestModule
    // component: TestComponent,
    // children: [{
    //   path: 'directive',
    //   component: TestDirectiveComponent
    // }, {
    //   path: 'structural',
    //   component: TestStructuralDirectiveComponent
    // }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
