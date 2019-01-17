import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariocreadoComponent } from './usuariocreado.component';

describe('UsuariocreadoComponent', () => {
  let component: UsuariocreadoComponent;
  let fixture: ComponentFixture<UsuariocreadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariocreadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariocreadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
