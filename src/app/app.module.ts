import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { AuthenticatedGuard } from './shared/guards/authenticated.guard';
import { AnonymousGuard } from './shared/guards/anonymous.guard';
import { MailService } from './services/mail.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { MailListComponent } from './mail/mail-list/mail-list.component';
import { MailItemComponent } from './mail/mail-item/mail-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [AuthenticatedGuard, AnonymousGuard, MailService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
