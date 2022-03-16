import { TestBed } from '@angular/core/testing';

import { CbusService } from './cbus.service';

describe('CbusService', () => {
  let service: CbusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CbusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
