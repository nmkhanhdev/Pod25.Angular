import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { ComponentsComponent } from './components/components.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { StructuralComponent } from './structural/structural.component';
import { HighlightDirective } from './attribute/highlight-directive/highlight.directive';

@NgModule({
  imports: [
    CommonModule,
    DirectivesRoutingModule,
  ],
  declarations: [
    DirectivesComponent,
    ComponentsComponent,
    StructuralComponent,
    HighlightDirective
  ]
})
export class DirectivesModule { }
