import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  viewMode="oneWay";
  flightSearchForm;

  @Output() searchFlightEmiter = new EventEmitter<NgForm>();

  ngOnInit() {
  }

  submitFormData(flightSearchForm:NgForm) {
    this.searchFlightEmiter.emit(flightSearchForm);
  }
}
