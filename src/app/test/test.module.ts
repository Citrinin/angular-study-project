import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyColorDirective } from './directives/attribute/my-color.directive';
import { MyEventDirective } from './directives/attribute/my-event.directive';
import { TestComponent } from './test.component';
import { MyColorChangeDirective } from './directives/attribute/my-color-change.directive';
import { MyRepeatDirective } from './directives/attribute/my-repeat.directive';
import { TestDirectiveComponent } from './test-directive/test-directive.component';
import { MyConfirmDirective } from './directives/attribute/my-confirm.directive';
import { MyCoordsDirective } from './directives/attribute/my-coords.directive';
import { ClickableElementDirective } from './directives/attribute/clickable-element.directive';
import { TestStructuralDirectiveComponent } from './test-structural-directive/test-structural-directive.component';
import { MyIfDirective } from './directives/structural/my-if.directive';
import { MyDelayDirective } from './directives/structural/my-delay.directive';
import { UserCardDirective } from './directives/structural/user-card.directive';
import { SharedModule } from '../shared/shared.module';
import { TestRoutingModule } from './test-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TestRoutingModule,
  ],
  declarations: [
    MyColorDirective,
    MyEventDirective,
    MyColorChangeDirective,
    MyRepeatDirective,
    MyConfirmDirective,
    MyCoordsDirective,
    MyIfDirective,
    MyDelayDirective,
    UserCardDirective,
    ClickableElementDirective,
    TestDirectiveComponent,
    TestStructuralDirectiveComponent,
    TestComponent
  ]
})
export class TestModule { }
