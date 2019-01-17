/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BicicletaserviceService } from './bicicletaservice.service';

describe('BicicletaserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BicicletaserviceService]
    });
  });

  it('should ...', inject([BicicletaserviceService], (service: BicicletaserviceService) => {
    expect(service).toBeTruthy();
  }));
});
