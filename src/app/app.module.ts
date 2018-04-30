import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight/flight-search-component/flight-search.component';
import { FlightResultComponent } from './flight/flight-result-component/flight-result.component';
import { FlightSearchService } from './flight/flight-search-service/flight-search.service';


@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    FlightResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    FlightSearchService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
