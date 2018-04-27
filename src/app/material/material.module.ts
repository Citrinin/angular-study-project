import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatInputModule,
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule]
})
export class MaterialModule { }
