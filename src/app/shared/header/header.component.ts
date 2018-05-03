import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { isNull } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loading = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  public userName: string;
  public isSignIn: boolean;

  ngOnInit() {
    this.checkAuth();
  }

  signoutClick() {
    this.loading = true;
    this.userService.logout().subscribe(() => {
      this.loading = false;
      this.router.navigate(['login']);
    },
      () => this.loading = false);
  }

  private checkAuth(): void {
    this.userName = this.userService.userName;
    this.isSignIn = !isNull(this.userName);
  }
}
