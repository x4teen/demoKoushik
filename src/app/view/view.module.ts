import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstViewComponent } from './first-view/first-view.component';



@NgModule({
  declarations: [
    FirstViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FirstViewComponent
  ]
})
export class ViewModule { }
