import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError as ObservableThrowError } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private game_api_url = 'https://demo.edgagement.com/api/game/type';
  private keyToken = 'blfyjKOdJPCTESy5zbC394VYYxzXnB21';
  
  constructor(private http: HttpClient) { }

  getGame(): Observable<object> {
    return this.http.get<Game[]>(this.game_api_url, {
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
