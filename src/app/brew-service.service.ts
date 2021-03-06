import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BrewServiceService {

  constructor(private http: HttpClient) { }


  myObservable() {
    return this.http.get("https://api.openbrewerydb.org/breweries");
  }

}
