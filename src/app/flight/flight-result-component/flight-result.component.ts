import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { FlightSearchService } from '../flight-search-service/flight-search.service';

@Component({
  selector: 'app-flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.css']
})
export class FlightResultComponent implements OnChanges {

  @Input() searchForm;

  oneWayFlights: any[];
  returnFlights: any[];
  source: string;
  destination: string;
  passengers: number;

  constructor(private flightSearchService: FlightSearchService) { }

  ngOnChanges() {
    if(this.searchForm !== undefined) {
      this.getFlights(this.searchForm);
    }
  }

  getFlights(searchForm) {
    this.source = this.searchForm.controls['source'].value;
    this.destination = this.searchForm.controls['destination'].value;
    this.passengers = +this.searchForm.controls['passengers'].value;
    this.flightSearchService.getFlights(this.source, this.destination)
      .subscribe(flights => this.oneWayFlights = flights);
    if(this.searchForm.controls['arrival'] !== undefined) {
      this.flightSearchService.getFlights(this.destination, this.source)
        .subscribe(flights => this.returnFlights = flights);
    }
  }

}
