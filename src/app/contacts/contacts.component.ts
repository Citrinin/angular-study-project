import { Component, OnInit } from '@angular/core';
import { MailService } from '../services/mail.service';
import { Contact } from '../@types/contact';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public contactsMenu = [
    { name: 'All', link: '/contacts' },
    { name: 'Starred', link: '/contacts' }
  ];

  public contacts: Contact[];

  constructor(
    private mailService: MailService
  ) { }

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
