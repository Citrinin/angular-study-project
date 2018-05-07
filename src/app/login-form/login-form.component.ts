import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


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
    private userService: UserService,
    private router: Router,
    public afAuth: AngularFireAuth
  ) { }

  public loginForm: FormGroup = new FormGroup({
    'login': new FormControl('', [Validators.minLength(3)]),
    'password': new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  ngOnInit() {
  }

  public login() {
    this.loading = true;
    this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.value.login, this.loginForm.value.password)
    .then(()=>{
      this.loading = false;
      this.router.navigate(['/mail/list']);
      console.log('success');
    }, err => {
      this.loading = false; 
      console.log(err)});
  }
}
