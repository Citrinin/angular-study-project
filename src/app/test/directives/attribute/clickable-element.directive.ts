// привязка свойств директивы к свойтсвам элемента DOM дерева
import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appClickableElement]'
})
export class ClickableElementDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
    // this.elementRef.nativeElement.cursor = 'pointer';
  }
  // @HostBinding - позволяет выполнить привязку свойства к хост элементу
  // если свойство isClicked = true - класс pressed будт добавлен к хост элементу
  @HostBinding('class.pressed') isClicked = false;
  @HostListener('mousedown') onMouseDown() {
    this.isClicked = true;
  }
  @HostListener('mouseup') onMouseUp() {
    this.isClicked = false;
  }
}
