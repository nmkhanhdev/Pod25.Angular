import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputAndOutputRoutingModule } from './input-and-output-routing.module';
import { InputAndOutputComponent } from './input-and-output.component';
import { AliasingComponent } from './aliasing/aliasing.component';
import { InTheMetadataComponent } from './in-the-metadata/in-the-metadata.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemOutputComponent } from './item-output/item-output.component';


@NgModule({
  declarations: [
    InputAndOutputComponent,
    ItemDetailComponent,
    ItemOutputComponent,
    InputOutputComponent,
    InTheMetadataComponent,
    AliasingComponent
  ],
  imports: [
    CommonModule,
    InputAndOutputRoutingModule
  ]
})
export class InputAndOutputModule { }