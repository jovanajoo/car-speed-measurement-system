import { TestBed } from '@angular/core/testing';

import { SensorLocationsService } from './sensor-locations.service';

describe('SensorLocationsService', () => {
  let service: SensorLocationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorLocationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
