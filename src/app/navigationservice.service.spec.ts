import { TestBed } from '@angular/core/testing';

import { NavigationserviceService } from './navigationservice.service';

describe('NavigationserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigationserviceService = TestBed.get(NavigationserviceService);
    expect(service).toBeTruthy();
  });
});
