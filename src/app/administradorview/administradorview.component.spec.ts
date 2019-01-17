import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorviewComponent } from './administradorview.component';

describe('AdministradorviewComponent', () => {
  let component: AdministradorviewComponent;
  let fixture: ComponentFixture<AdministradorviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
