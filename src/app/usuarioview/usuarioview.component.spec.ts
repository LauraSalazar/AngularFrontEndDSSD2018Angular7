import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioviewComponent } from './usuarioview.component';

describe('UsuarioviewComponent', () => {
  let component: UsuarioviewComponent;
  let fixture: ComponentFixture<UsuarioviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
