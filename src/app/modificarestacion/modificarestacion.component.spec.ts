import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarestacionComponent } from './modificarestacion.component';

describe('ModificarestacionComponent', () => {
  let component: ModificarestacionComponent;
  let fixture: ComponentFixture<ModificarestacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarestacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarestacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
