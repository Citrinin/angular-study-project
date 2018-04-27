import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyColorChange]'
})
export class MyColorChangeDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  // для того, чтобы принимать параметр - имя свойства должно соответствовать селектору
  @Input('appMyColorChange') set changeColor(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
  }
}
