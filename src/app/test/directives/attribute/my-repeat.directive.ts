import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  // директиву можно использовать и как атрибут, и как элемент
  selector: '[appMyRepeat], appMyRepeat'
})
export class MyRepeatDirective {

  @Input() message: string;
  @Input() count: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  // так делать нельзя - аттрибутивная директива используется как структурная
  ngOnInit() {
    for (let i = 0; i < this.count; i++ ) {
      const elem: HTMLDivElement = this.renderer.createElement('div');
      this.renderer.appendChild(this.elementRef.nativeElement, elem);
      elem.innerHTML = 'message';
    }
  }

}
