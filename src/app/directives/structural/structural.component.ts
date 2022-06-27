import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  time: number = 2

  isTrue: boolean = true

  title: string = 'Angular'

  isMetric: boolean = true

  constructor() { }

  ngOnInit() {
  }

}
