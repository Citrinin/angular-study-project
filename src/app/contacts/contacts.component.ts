import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactsMenu = [
    { name: 'All', link: '/contacts' },
    { name: 'Starred', link: '/contacts' }
  ];


  constructor() { }

  ngOnInit() {
  }

}
