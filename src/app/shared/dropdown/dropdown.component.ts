import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @ViewChild('toggleButton') toggleBtn;
  @Input() items;
  visible = false;
  activeItem = 'Mail';
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

  // blur() {
  //   this.visible = false;
  //   const blurObservable = fromEvent(this.toggleBtn, 'blur');
  // }

  toggle(): void {
    this.visible = !this.visible;
    console.log(this.toggleBtn);
  }

  clickHandler(item): void {

    this.activeItem = item.name;
    console.log(this.activeItem);
    this.toggle();
  }



}
