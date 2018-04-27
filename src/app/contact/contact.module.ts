import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsComponent } from './contacts.component';
import { HeaderComponent } from '../shared/header/header.component';
import { ToolbarComponent } from '../shared/toolbar/toolbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactsComponent,
    ContactFormComponent,
    AddContactComponent,
    ContactsListComponent

  ]
})
export class ContactModule { }
