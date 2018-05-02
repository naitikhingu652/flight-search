import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchComponent } from './flight-search.component';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlightSearchService } from '../flight-search-service/flight-search.service';

describe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightSearchComponent ],
      imports: [
        ReactiveFormsModule,
        HttpModule
      ],
      providers: [ FlightSearchService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create flight search component', () => {
    expect(component).toBeTruthy();
  });

  it('should create one way search form with 4 controls', () => {
    expect(component.oneWayFlightSearchForm.contains('source')).toBeTruthy();
    expect(component.oneWayFlightSearchForm.contains('destination')).toBeTruthy();
    expect(component.oneWayFlightSearchForm.contains('departure')).toBeTruthy();
    expect(component.oneWayFlightSearchForm.contains('passengers')).toBeTruthy();
  });

  it('should create two way search form with 5 controls', () => {
    expect(component.twoWayFlightSearchForm.contains('source')).toBeTruthy();
    expect(component.twoWayFlightSearchForm.contains('destination')).toBeTruthy();
    expect(component.twoWayFlightSearchForm.contains('departure')).toBeTruthy();
    expect(component.twoWayFlightSearchForm.contains('arrival')).toBeTruthy();
    expect(component.twoWayFlightSearchForm.contains('passengers')).toBeTruthy();
  });

  it('should make each control of one way search form required', () => {
    let sourceControl = component.oneWayFlightSearchForm.get('source');
    let destinationControl = component.oneWayFlightSearchForm.get('destination');
    let departureControl = component.oneWayFlightSearchForm.get('departure');
    let passengerControl = component.oneWayFlightSearchForm.get('passengers');

    sourceControl.setValue('');
    destinationControl.setValue('');
    departureControl.setValue('');
    passengerControl.setValue('');

    expect(sourceControl.valid).toBeFalsy();
    expect(destinationControl.valid).toBeFalsy();
    expect(departureControl.valid).toBeFalsy();
    expect(passengerControl.valid).toBeFalsy();
  });

  it('should make each control of two way search form required', () => {
    let sourceControl = component.twoWayFlightSearchForm.get('source');
    let destinationControl = component.twoWayFlightSearchForm.get('destination');
    let departureControl = component.twoWayFlightSearchForm.get('departure');
    let arrivalControl = component.twoWayFlightSearchForm.get('arrival');
    let passengerControl = component.twoWayFlightSearchForm.get('passengers');

    sourceControl.setValue('');
    destinationControl.setValue('');
    departureControl.setValue('');
    arrivalControl.setValue('');
    passengerControl.setValue('');

    expect(sourceControl.valid).toBeFalsy();
    expect(destinationControl.valid).toBeFalsy();
    expect(departureControl.valid).toBeFalsy();
    expect(arrivalControl.valid).toBeFalsy();
    expect(passengerControl.valid).toBeFalsy();
  });

  it('should raise viewModeChange and searchFlight event when one way form is submitted', () => {
    let viewMode = null;
    let searchFlight = null;
    component.viewModeChangeEmitter.subscribe(vm => viewMode = vm);
    component.searchFlightEmitter.subscribe(sf => searchFlight = sf);

    component.submitOnewayFormData(component.oneWayFlightSearchForm);
    
    expect(viewMode).not.toBeNull();
    expect(searchFlight).not.toBeNull();
  });

  it('should raise viewModeChange and searchFlight event when one way form is submitted', () => {
    let viewMode = null;
    let searchFlight = null;
    component.viewModeChangeEmitter.subscribe(vm => viewMode = vm);
    component.searchFlightEmitter.subscribe(sf => searchFlight = sf);

    component.submitOnewayFormData(component.twoWayFlightSearchForm);
    
    expect(viewMode).not.toBeNull();
    expect(searchFlight).not.toBeNull();
  });

});
