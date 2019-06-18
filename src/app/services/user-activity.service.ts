import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Activity } from '../interfaces/activity';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError as ObservableThrowError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserActivityService {

  private activity_api = environment.base_api + 'report/activity';
  private paginationUrl = environment.base_api + 'report/activity?page=';
  private keyToken = environment.keyToken;

  constructor( private http: HttpClient) { 

  }
  getActivity(): Observable<object> {
    return this.http.get<Activity>(this.activity_api, {
      'headers': new HttpHeaders().set('Authorization', this.keyToken)
      
       })
       .pipe(
        catchError((error) => this._handleError(error))
      );

  }
  getActivityWithPage(page: string){
    console.log("getAllUsersWithPage" + this.paginationUrl+page);
    return this.http.get<Activity>(this.paginationUrl + page, {
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
