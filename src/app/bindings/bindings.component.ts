import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  fontSizePx: number = 16;
  
  constructor() { }

  ngOnChanges() {
    // Called before ngOnInit() (if the component has bound inputs) and 
    // whenever one or more data-bound input properties change.
    console.log('ngOnChanges of BindingsComponent.ts in BindingsModule.ts')
  }

  ngOnInit() {
    // Called once, after the first ngOnChanges(). ngOnInit() is still called even when ngOnChanges() 
    // is not (which is the case when there are no template-bound inputs).
    console.log('constructor of BindingsComponent.ts in BindingsModule.ts')
  }

  ngDoCheck() {
    // Called immediately after ngOnChanges() on every change detection run, 
    // and immediately after ngOnInit() on the first run.
    console.log('ngDoCheck of BindingsComponent.ts in BindingsModule.ts')
  }

  ngAfterContentInit() {
    // Called once after the first ngDoCheck().
    console.log('ngAfterContentInit of BindingsComponent.ts in BindingsModule.ts')
  }

  ngAfterContentChecked() {
    // Called after ngAfterContentInit() and every subsequent ngDoCheck().
    console.log('ngAfterContentChecked of OrdersComponent.ts in BindingsModule.ts')
  }

  ngAfterViewInit() {
    // Called once after the first ngAfterContentChecked().
    console.log('ngAfterViewInit of BindingsComponent.ts in BindingsModule.ts')
  }

  ngAfterViewChecked() {
    // Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().
    console.log('ngAfterViewChecked of OrdersComponent.ts in BindingsModule.ts')
  }

  ngOnDestroy() {
    // Called immediately before Angular destroys the directive or component.
    console.log('ngOnDestroy of BindingsComponent.ts in BindingsModule.ts')
  }
}
