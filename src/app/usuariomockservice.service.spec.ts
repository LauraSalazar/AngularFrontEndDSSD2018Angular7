import { TestBed, inject } from '@angular/core/testing';

import { UsuariomockserviceService } from './usuariomockservice.service';

describe('UsuariomockserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuariomockserviceService]
    });
  });

  it('should be created', inject([UsuariomockserviceService], (service: UsuariomockserviceService) => {
    expect(service).toBeTruthy();
  }));
});
