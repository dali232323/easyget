import { TestBed } from '@angular/core/testing';

import { TruckApiService } from './truck-api.service';

describe('TruckApiService', () => {
  let service: TruckApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TruckApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
