import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstViewComponent } from './first-view/first-view.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FirstViewComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    FirstViewComponent
  ]
})
export class ViewModule { }
