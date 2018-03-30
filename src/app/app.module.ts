import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MailComponent } from './mail/mail.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { GoogleService } from './services/google.service';
import { MainComponent } from './main/main.component';
import { AuthenticatedGuard } from './shared/guards/authenticated.guard';
import { DropdownComponent } from './shared/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    HeaderComponent,
    MenuComponent,
    ContactsComponent,
    ToolbarComponent,
    MainComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GoogleService, AuthenticatedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
