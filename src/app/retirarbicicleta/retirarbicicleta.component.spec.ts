import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirarbicicletaComponent } from './retirarbicicleta.component';

describe('RetirarbicicletaComponent', () => {
  let component: RetirarbicicletaComponent;
  let fixture: ComponentFixture<RetirarbicicletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetirarbicicletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirarbicicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
