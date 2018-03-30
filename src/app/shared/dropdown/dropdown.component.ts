import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() items;
  visible = false;
  activeItem = 'none';

  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    this.visible = !this.visible;
    console.log(this.visible);
  }

  clickHandler(item): void {

    this.activeItem = item.name;
  }

}
