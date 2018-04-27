import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public username: string;
  public password: string;
  public loading = false;


  constructor(
    private userService: UserService
  ) { }

  public loginForm: FormGroup = new FormGroup({
    'login': new FormControl('', [Validators.minLength(3)]),
    'password': new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  ngOnInit() {
  }

  public login() {
    console.log(this.username, ' ', this.password);
    this.loading = true;
    this.userService.login(this.loginForm.value.login).subscribe(() => this.loading = false);
  }

  public submit() {
    console.log(this.loginForm.value.login);
  }
}
