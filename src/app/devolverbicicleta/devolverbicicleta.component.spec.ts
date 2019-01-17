import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolverbicicletaComponent } from './devolverbicicleta.component';

describe('DevolverbicicletaComponent', () => {
  let component: DevolverbicicletaComponent;
  let fixture: ComponentFixture<DevolverbicicletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevolverbicicletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolverbicicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
