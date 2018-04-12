import { Component, OnInit } from '@angular/core';
import { MailService } from '../../services/mail.service';
import { isNull } from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private mailService: MailService
  ) { }

  public userName: string;
  public isSignIn: boolean;

  ngOnInit() {
    this.mailService.authChanged.subscribe(_ => this.checkAuth());
    this.checkAuth();
  }

  signoutClick() {
    this.mailService.logout();
  }

  private checkAuth(): void {
    this.userName = this.mailService.userName;
    this.isSignIn = !isNull(this.userName);
  }
}
