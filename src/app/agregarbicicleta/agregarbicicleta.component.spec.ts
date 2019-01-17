import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarbicicletaComponent } from './agregarbicicleta.component';

describe('AgregarbicicletaComponent', () => {
  let component: AgregarbicicletaComponent;
  let fixture: ComponentFixture<AgregarbicicletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarbicicletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarbicicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
