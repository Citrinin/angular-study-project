import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appMyConfirm]'
})
export class MyConfirmDirective {

  @Input('appMyConfirm')
  onConfirmed: Function = () => {}

  constructor() { }

  @HostListener('click') onConfirm(event: Event) {
    const confirmed = window.confirm('Вы уверены?');

    if (confirmed) {
      this.onConfirmed();
    }
  }

}
