/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EstacioncreadaComponent } from './estacioncreada.component';

describe('EstacioncreadaComponent', () => {
  let component: EstacioncreadaComponent;
  let fixture: ComponentFixture<EstacioncreadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstacioncreadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstacioncreadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
