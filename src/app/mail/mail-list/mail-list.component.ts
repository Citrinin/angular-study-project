import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MailService } from '../../services/mail.service';
import { Mail } from '../../@types/mail';
import { tap, catchError } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {

  public mails;
  public page: string;
  public itemsPerPage = 10;

  constructor(
    private mailService: MailService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.page = this.route.snapshot.routeConfig.path;
    if (this.page === 'sent') {
      this.mails = this.mailService.getMails('sent', this.itemsPerPage)
    } else {
      this.mails = this.mailService.getMails('inbox', this.itemsPerPage)
    }
  }

  public nextPage() {
    this.mails = this.mailService.getMailsNextPage(this.page, this.itemsPerPage);
  }

  public prevPage() {
    this.mails = this.mailService.getMailsPrevPage(this.page, this.itemsPerPage);
  }

  public amountOfItemsChanged(ev) {
    this.mails = this.mailService.getMails(this.page, this.itemsPerPage);
  }

}
