import { TestBed } from '@angular/core/testing';

import { TipoproductoService } from './tipoproducto.service';

describe('TipoproductoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoproductoService = TestBed.get(TipoproductoService);
    expect(service).toBeTruthy();
  });
});
