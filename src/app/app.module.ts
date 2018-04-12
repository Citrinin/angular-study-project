import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MailComponent } from './mail/mail.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainComponent } from './main/main.component';
import { AuthenticatedGuard } from './shared/guards/authenticated.guard';
import { AnonymousGuard } from './shared/guards/anonymous.guard';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { MailService } from './services/mail.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { MailListComponent } from './mail/mail-list/mail-list.component';
import { MailItemComponent } from './mail/mail-item/mail-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    HeaderComponent,
    MenuComponent,
    ContactsComponent,
    ToolbarComponent,
    MainComponent,
    DropdownComponent,
    LoginFormComponent,
    MailListComponent,
    MailItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [AuthenticatedGuard, AnonymousGuard, MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
