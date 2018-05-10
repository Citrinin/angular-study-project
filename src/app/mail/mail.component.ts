import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  public mailMenu = [
    { name: 'New Mail', link: '/mail/new' },
    { name: 'Inbox', link: '/mail/inbox' },
    { name: 'Sent Mail', link: '/mail/sent' },
  ];

  constructor(
  ) { }

  ngOnInit() {

  }


}
