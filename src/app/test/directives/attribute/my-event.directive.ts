import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyEvent]'
})
export class MyEventDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  // здесь важна именно строка с типом события  - mouseenter
  // имя метода - произвольное
  @HostListener('mouseenter') onMouseEnterEvent() {
  this.changeColor('red');
  }

  @HostListener('mouseleave') onMouseLeaveEvent() {
    this.changeColor(null);
  }

  changeColor(color: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
  }

}
