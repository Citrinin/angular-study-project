import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public contactsMenu = [
    { name: 'All', link: '/contacts/list' },
    { name: 'Add', link: '/contacts/add' }
  ];



  constructor() { }

  ngOnInit() {
  }


}
