import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MailService } from '../../services/mail.service';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-new-mail',
  templateUrl: './new-mail.component.html',
  styleUrls: ['./new-mail.component.css']
})
export class NewMailComponent implements OnInit {


  public mailForm: FormGroup = new FormGroup({
    'email': new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    'subject': new FormControl(),
    'message': new FormControl()
  });

  matcher = new MyErrorStateMatcher();

  constructor(
    private mailService: MailService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public sendMessage() {
    let { email, subject, message } = this.mailForm.value;
    this.mailService.sendMessage(email, subject, message).subscribe(() => {
      this.router.navigate(['/mail/inbox']);
    });
  }

} 
