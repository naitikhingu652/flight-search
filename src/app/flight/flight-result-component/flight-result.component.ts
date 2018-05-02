import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FlightSearchService } from '../flight-search-service/flight-search.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.css']
})
export class FlightResultComponent implements OnChanges {

  @Input() searchForm : FormGroup;
  @Input() viewMode : string;

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
    console.log(this.viewMode);
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
