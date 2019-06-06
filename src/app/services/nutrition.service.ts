import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

import { Food } from '../models/food';
import { SearchResult } from '../models/search-result';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {

  apiKey: string;

  constructor(private http: HttpClient) {
    this.apiKey = environment.NDB_API_KEY;
  }

  // searchFood(query: string): Observable<SearchResult[]> {
  //   const url = 'https://api.nal.usda.gov/ndb/search/?format=json&';
  //   const params: string = [
  //     `q=${query}`,
  //     `sort=r`, // sort by relevance
  //     `max=25`, // maximum number of results
  //     `offset=0`, // beginning row in the result set to begin
  //     `ds=Standard%20Reference`, // 'Standard Reference' or 'Branded Food Products
  //     `api_key=${this.apiKey}` // Your api key
  //   ].join('&');

  //   const queryUrl = `${url}${params}`;

  //   // return this.http.
  // }
}
