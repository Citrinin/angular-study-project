import { Component, OnInit } from '@angular/core';
import { isNull } from 'util';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loading = false;
  date: Date;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  public userName: string;
  public isSignIn: boolean;

  ngOnInit() {
    this.checkAuth();
    interval(1000)
      .subscribe(() => {
        this.date = new Date();
      });
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
    this.userName = this.authService.userName;
    this.isSignIn = !isNull(this.userName);
  }
}
