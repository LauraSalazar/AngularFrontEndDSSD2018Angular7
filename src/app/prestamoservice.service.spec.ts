import { TestBed } from '@angular/core/testing';

import { PrestamoserviceService } from './prestamoservice.service';

describe('PrestamoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrestamoserviceService = TestBed.get(PrestamoserviceService);
    expect(service).toBeTruthy();
  });
});
