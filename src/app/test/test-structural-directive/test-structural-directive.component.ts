import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-structural-directive',
  templateUrl: './test-structural-directive.component.html',
  styleUrls: ['./test-structural-directive.component.css']
})
export class TestStructuralDirectiveComponent implements OnInit {

  visible = false;

  constructor() { }

  ngOnInit() {
  }

  public changeVisibility() {
    this.visible = !this.visible;
  }
}
