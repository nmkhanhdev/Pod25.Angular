import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BindingsRoutingModule } from './bindings-routing.module';
import { BindingsComponent } from './bindings.component';
import { SizerComponent } from './sizer/sizer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BindingsComponent,
    SizerComponent
  ],
  imports: [
    CommonModule,
    BindingsRoutingModule,
    FormsModule
  ]
})
export class BindingsModule { }