import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoallowedComponent } from './noallowed.component';

describe('NoallowedComponent', () => {
  let component: NoallowedComponent;
  let fixture: ComponentFixture<NoallowedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoallowedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoallowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
