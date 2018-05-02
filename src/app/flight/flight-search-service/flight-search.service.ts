import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/observable';

@Injectable()
export class FlightSearchService {

  private url = "https://my-json-server.typicode.com/naitikhingu652/flight-search/flights";

  constructor(private http: Http) { }

  getFlights(source, destination) {

    let requestParams = new URLSearchParams();
    requestParams.append('source', source)
    requestParams.append('destination', destination);

    let requestOptions = new RequestOptions({params: requestParams})

    return this.http.get(this.url, requestOptions)
      .map(response => response.json());
  }

}
