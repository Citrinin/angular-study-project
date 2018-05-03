import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { isNull } from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  public userName: string;
  public isSignIn: boolean;

  ngOnInit() {
    this.checkAuth();
  }

  signoutClick() {
    this.userService.logout();
  }

  private checkAuth(): void {
    this.userName = this.userService.userName;
    this.isSignIn = !isNull(this.userName);
  }
}
