import { Component, OnInit, Input } from '@angular/core';
import { MailService } from '../../services/mail.service';
import { Mail } from '../../@types/mail';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {

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
