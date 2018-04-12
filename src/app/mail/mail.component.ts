import { Component, OnInit } from '@angular/core';
import { MailService } from '../services/mail.service';
import { Mail } from '../@types/mail';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  public mailMenu = [
    { name: 'Inbox', link: '/mail' },
    { name: 'Sent Mail', link: '/mail' },
    { name: 'Draft', link: '/mail' },
  ];

  public mails: Mail[];

  constructor(
    private mailService: MailService
  ) { }

  ngOnInit() {
    this.getMail();
  }

  getMail(): void {
    this.mailService.getMails()
      .pipe(
        tap(mails => this.mails = mails)
      ).subscribe();
  }

}
