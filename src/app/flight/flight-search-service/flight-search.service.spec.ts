import { TestBed, inject } from '@angular/core/testing';

import { FlightSearchService } from './flight-search.service';
import { HttpModule } from '@angular/http';

describe('FlightSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ FlightSearchService ],
      imports: [ HttpModule ]
    });
  });

  it('should create flight search service', inject([FlightSearchService], (service: FlightSearchService) => {
    expect(service).toBeTruthy();
  }));
});
