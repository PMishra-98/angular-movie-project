import { TestBed } from '@angular/core/testing';

import { NetserviceService } from './netservice.service';

describe('NetserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetserviceService = TestBed.get(NetserviceService);
    expect(service).toBeTruthy();
  });
});
