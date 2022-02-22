import { TestBed } from '@angular/core/testing';

import { SrvPagosService } from './srv-pagos.service';

describe('SrvPagosService', () => {
  let service: SrvPagosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvPagosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
