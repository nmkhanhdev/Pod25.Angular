import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs.component';
import { RxjsRoutingModule } from './rxjs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RxjsRoutingModule
  ],
  declarations: [RxjsComponent]
})
export class RxjsModule { }
