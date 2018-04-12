import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  public mailMenu = [
    { name: 'Inbox', link: '/mail/list' },
    { name: 'Sent Mail', link: '/mail' },
    { name: 'Draft', link: '/mail' },
  ];

  constructor(
  ) { }

  ngOnInit() {

  }


}
