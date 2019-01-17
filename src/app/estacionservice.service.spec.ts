/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EstacionserviceService } from './estacionservice.service';

describe('EstacionserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstacionserviceService]
    });
  });

  it('should ...', inject([EstacionserviceService], (service: EstacionserviceService) => {
    expect(service).toBeTruthy();
  }));
});
