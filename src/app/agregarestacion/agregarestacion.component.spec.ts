import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarestacionComponent } from './agregarestacion.component';

describe('AgregarestacionComponent', () => {
  let component: AgregarestacionComponent;
  let fixture: ComponentFixture<AgregarestacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarestacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarestacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
