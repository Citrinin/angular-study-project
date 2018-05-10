import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public username: string;
  public password: string;
  public loading = false;
  public loginError = false;


  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  public loginForm: FormGroup = new FormGroup({
    'login': new FormControl('', [Validators.minLength(3)]),
    'password': new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  ngOnInit() {
  }

  public login() {
    this.loading = true;
    this.userService.login(this.loginForm.value.login, this.loginForm.value.password).subscribe(() => {
      this.loading = false;
      this.router.navigate(['/mail/inbox']);
      console.log('success');
    }, err => {
      this.loading = false;
      this.loginError = true;
      console.log(err)
    });
  }


  public resetPassword() {
    this.userService.resetPassword(this.loginForm.value.login).subscribe(() => {
      console.log('message sent');
    })
  }
}
