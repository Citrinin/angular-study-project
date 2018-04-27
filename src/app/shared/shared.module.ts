import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TestRoutingModule } from '../test/test-routing.module';
import { ContactRoutingModule } from '../contact/contact-routing.module';
import { MailRoutingModule } from '../mail/mail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule,
    ContactRoutingModule,
    MailRoutingModule
  ],
  declarations: [
    HeaderComponent,
    MenuComponent,
    ToolbarComponent,
    DropdownComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    ToolbarComponent,
    DropdownComponent
  ]
})
export class SharedModule { }
