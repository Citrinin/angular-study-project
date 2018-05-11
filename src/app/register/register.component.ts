import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { MatchPasswordValidation } from '../shared/utils/matchPasswordValidation';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public username: string;
  public password: string;
  public loading = false;

  public registerForm: FormGroup = new FormGroup({
    'login': new FormControl('', [Validators.minLength(3)]),
    'password': new FormControl('', [Validators.required, Validators.minLength(5)]),
    'confirmPassword': new FormControl('', [Validators.required, Validators.minLength(5)])
  }, { validators: MatchPasswordValidation.MatchPassword });

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public register() {
    this.userService.register(this.registerForm.value.login, this.registerForm.value.password)
      .subscribe(() => {
        console.log(123);
        this.router.navigate(['/login'])
      },
        error => console.error(error));
  }

}
