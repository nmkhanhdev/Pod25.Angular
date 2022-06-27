import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  displayChild: boolean = false;
  
  constructor() {
    // console.log("AppComponent:Constructor");
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }

  ngOnChanges() {
    // console.log("AppComponent:OnChanges");
  }

  ngOnInit() {
    // console.log("AppComponent:OnInit");
  }

  ngDoCheck() {
    // console.log("AppComponent:DoCheck");
  }
  
  ngAfterContentInit() {
    // console.log("AppComponent:AfterContentInit");
  }

  ngAfterContentChecked() {
    // console.log("AppComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    // console.log("AppComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    // console.log("AppComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    // console.log("AppComponent:OnDestroy");
  }
}
