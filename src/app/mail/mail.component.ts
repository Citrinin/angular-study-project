import { Component, OnInit } from '@angular/core';
import { GoogleService } from '../services/google.service';
import { Mail } from '../@types/mail';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  mailMenu = [
    { name: 'Inbox', link: '/mail' },
    { name: 'Sent Mail', link: '/mail' },
    { name: 'Draft', link: '/mail' },
  ];

  mails: Mail[];

  constructor(private googleService: GoogleService) { }

  ngOnInit() {
    this.mails = [];
    this.googleService.getMailList().subscribe(result => {
      // console.log(result);
      this.mails = [...this.mails, result];
      // console.log(this.mails);
    });
  }

}
