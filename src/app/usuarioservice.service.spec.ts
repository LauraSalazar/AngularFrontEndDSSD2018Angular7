import { TestBed, inject } from '@angular/core/testing';

import { UsuarioserviceService } from './usuarioservice.service';

describe('UsuarioserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioserviceService]
    });
  });

  it('should be created', inject([UsuarioserviceService], (service: UsuarioserviceService) => {
    expect(service).toBeTruthy();
  }));
});
