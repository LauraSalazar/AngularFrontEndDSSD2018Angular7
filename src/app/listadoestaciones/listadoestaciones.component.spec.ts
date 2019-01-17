import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoestacionesComponent } from './listadoestaciones.component';

describe('ListadoestacionesComponent', () => {
  let component: ListadoestacionesComponent;
  let fixture: ComponentFixture<ListadoestacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoestacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoestacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
