import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Activity } from '../interfaces/activity';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError as ObservableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserActivityService {

  private activity_api = 'https://demo.edgagement.com/api/report/leadboard';
  private keyToken = 'blfyjKOdJPCTESy5zbC394VYYxzXnB21';

  constructor( private http: HttpClient, private act: Activity) { 

  }
  getActivity(): Observable<object> {
    return this.http.get(this.activity_api, {
      'headers': new HttpHeaders().set('Authorization', this.keyToken)
      
       })
       .pipe(
        catchError((error) => this._handleError(error))
      );

  }

  private _handleError(err: HttpErrorResponse | any): Observable<any> {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    return ObservableThrowError(errorMsg);
  }
}
