import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { isNull } from 'util';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loading = false;
  date: Date;

  constructor(
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
    this.userName = this.userService.userName;
    this.isSignIn = !isNull(this.userName);
  }
}
