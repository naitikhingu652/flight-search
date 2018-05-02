import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  viewMode="oneWay";
  oneWayFlightSearchForm: FormGroup;
  twoWayFlightSearchForm: FormGroup;

  @Output() searchFlightEmitter = new EventEmitter<FormGroup>();
  @Output() viewModeChangeEmitter = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.oneWayFlightSearchForm = this.formBuilder.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      departure: ['', Validators.required],
      passengers: ['', Validators.required]
    });
    this.twoWayFlightSearchForm = this.formBuilder.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      departure: ['', Validators.required],
      arrival:  ['', Validators.required], 
      passengers: ['', Validators.required]
    });
  }

  submitOnewayFormData(flightSearchForm:FormGroup) {
    this.viewModeChangeEmitter.emit(this.viewMode);
    this.searchFlightEmitter.emit(this.oneWayFlightSearchForm);
  }
  submitTwowayFormData(flightSearchForm:FormGroup) {
    this.viewModeChangeEmitter.emit(this.viewMode);
    this.searchFlightEmitter.emit(this.twoWayFlightSearchForm);
  }
}
