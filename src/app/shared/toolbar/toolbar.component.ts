import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  mainMenuItems = [
    {
      name: 'Mail',
      link: '/mail'
    },
    {
      name: 'Contacts',
      link: '/contacts'
    }
  ];
  constructor() { }

  ngOnInit() {
  }


}
