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
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { SharedModule } from './shared/shared.module';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { config } from './config/config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

registerLocaleData(localeRu);


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginFormComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(config.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    AuthenticatedGuard,
    AnonymousGuard,
    UserService,
    MailService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
