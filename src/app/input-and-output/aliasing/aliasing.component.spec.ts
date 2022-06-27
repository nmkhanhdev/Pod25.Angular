/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AliasingComponent } from './aliasing.component';

describe('AliasingComponent', () => {
  let component: AliasingComponent;
  let fixture: ComponentFixture<AliasingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliasingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
