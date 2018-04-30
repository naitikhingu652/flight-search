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

  constructor(private flightSearchService: FlightSearchService) { }

  ngOnChanges() {
    if(this.searchForm !== undefined) {
      this.getFlights(this.searchForm);
    }
  }

  getFlights(searchForm) {
    let source = this.searchForm.controls['source'].value;
    let destination = this.searchForm.controls['destination'].value;
    this.flightSearchService.getFlights(source, destination)
      .subscribe(flights => this.oneWayFlights = flights);
    if(this.searchForm.controls['arrival'] !== undefined) {
      this.flightSearchService.getFlights(destination, source)
        .subscribe(flights => this.returnFlights = flights);
    }
  }

}