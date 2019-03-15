import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicicletaprestadaComponent } from './bicicletaprestada.component';

describe('BicicletaprestadaComponent', () => {
  let component: BicicletaprestadaComponent;
  let fixture: ComponentFixture<BicicletaprestadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicicletaprestadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicicletaprestadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
