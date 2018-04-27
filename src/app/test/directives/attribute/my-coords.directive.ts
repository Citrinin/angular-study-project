import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMyCoords]'
})
export class MyCoordsDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    this.elementRef.nativeElement.innerHTML = 'X' + event.offsetX + ' Y' + event.offsetY;
  }
}
