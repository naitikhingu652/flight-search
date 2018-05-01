import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightResultComponent } from './flight-result.component';
import { HttpModule } from '@angular/http';
import { FlightSearchService } from '../flight-search-service/flight-search.service';

describe('FlightResultComponent', () => {
  let component: FlightResultComponent;
  let fixture: ComponentFixture<FlightResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightResultComponent ],
      imports: [ HttpModule ],
      providers: [ FlightSearchService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create flight result component', () => {
    expect(component).toBeTruthy();
  });
});
