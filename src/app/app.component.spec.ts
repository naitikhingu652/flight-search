import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight/flight-search-component/flight-search.component';
import { FlightResultComponent } from './flight/flight-result-component/flight-result.component';
import { FlightSearchService } from './flight/flight-search-service/flight-search.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FlightSearchComponent,
        FlightResultComponent
      ],
      imports: [
        FormsModule,
        HttpModule
      ],
      providers: [
        FlightSearchService
      ]
    }).compileComponents();
    
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Flight Search Engine'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Flight Search Engine');
  }));
  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Flight Search Engine');
  }));
});
