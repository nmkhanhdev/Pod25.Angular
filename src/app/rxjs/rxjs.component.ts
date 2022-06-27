import { Component, OnInit } from '@angular/core';
import { map, filter, take, tap } from "rxjs/operators";
import { interval, of, pipe } from "rxjs";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  observable = interval(1000);
  takeThree = this.observable.pipe(take(3));
  takeMap = this.observable.pipe(
    take(3),
    map((v) => Date.now())
  );

  constructor() { }

  ngOnInit() {
    this.observable.subscribe(value => console.log("Subscriber: " + value))
    this.takeThree.subscribe(value => console.log("[Take]Subscriber: " + value))
    this.takeMap.subscribe(value => console.log("[Map]Subscriber: " + value))

    interval(1000)
      .pipe(
        take(3),
        map(v => Date.now())
      )
      .subscribe(value => console.log("[Tip]Subscriber: " + value));

      // this.loading = true;
      // this.apiService
      //   .get()
      //   .pipe(finalize(() => (this.loading = false)))
      //   .subscribe();
  }

}
