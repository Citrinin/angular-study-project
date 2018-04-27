import { Component, OnInit } from '@angular/core';
import { MailService } from '../../services/mail.service';
import { Contact } from '../../@types/contact';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  public contacts: Contact[];
  constructor(private mailService: MailService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.mailService.getContacts()
      .pipe(
        tap(contacts => this.contacts = contacts)
      ).subscribe();
  }
}
