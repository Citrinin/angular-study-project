import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  // TemplateRef - шаблон, который может использоваться для создания представления (директива может его показать или удалить)
  // ViewContainerRef - контейнер, создержащий представление. Каждый контейнер привязан к элементу разметки
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {  }

  @Input('appMyIf') set MyIfValue(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
