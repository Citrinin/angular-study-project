import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public username: string;
  public password: string;
  public loading = false;
  @ViewChild('fofoform') fofoform: NgForm;

  constructor(
    private mailService: MailService
  ) { }

  ngOnInit() {
  }

  login() {
    console.log(this.username, ' ', this.password);
    this.loading = true;
    this.mailService.login(this.username).subscribe(() => this.loading = false);
  }

  submit() {
    console.log(this.fofoform.value);
  }
}
