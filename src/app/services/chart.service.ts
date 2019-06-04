import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  getResponseRate() {
    return this.http.get("")
      .map(result => result);
  }

  getLeaders() {
    return this.http.get("").map(result => result);
  }

}
