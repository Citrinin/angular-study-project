import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestDirectiveComponent } from './test-directive/test-directive.component';
import { TestStructuralDirectiveComponent } from './test-structural-directive/test-structural-directive.component';
import { TestComponent } from './test.component';

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
    children: [{
      path: 'directive',
      component: TestDirectiveComponent
    }, {
      path: 'structural',
      component: TestStructuralDirectiveComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
