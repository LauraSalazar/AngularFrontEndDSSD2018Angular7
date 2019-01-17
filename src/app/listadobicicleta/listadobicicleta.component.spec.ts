import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadobicicletaComponent } from './listadobicicleta.component';

describe('ListadobicicletaComponent', () => {
  let component: ListadobicicletaComponent;
  let fixture: ComponentFixture<ListadobicicletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadobicicletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadobicicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
