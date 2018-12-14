import { TestBed } from '@angular/core/testing';

import { BonitaserviceService } from './bonitaservice.service';

describe('BonitaserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BonitaserviceService = TestBed.get(BonitaserviceService);
    expect(service).toBeTruthy();
  });
});
