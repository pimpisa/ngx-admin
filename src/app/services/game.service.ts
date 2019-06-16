import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError as ObservableThrowError } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../interfaces/game';
import { Game_Module } from '../interfaces/game';
import { environment } from '../../environments/environment';
import { delay, map } from 'rxjs/operators';
import 'rxjs/operator/filter'; 

export interface Game_type {
  id: string;
  title: string;
  completed: string;
  inprogress: string;
  total: string;
  max: string;
  overall: string;
  raw: number;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private game_demos_api = environment.base_api+'game/type';
  private game_module_api = environment.base_api+'report/game';
  private keyToken = environment.keyToken;
  
  constructor(private http: HttpClient) { }

  getGame(): Observable<Game> {
    return this.http.get<Game>(this.game_demos_api, {
      'headers': new HttpHeaders().set('Authorization', this.keyToken)
      
       })
       .pipe(
        catchError((error) => this._handleError(error))
      );
  }
  getGameModule(): Observable<object> {
    return this.http.get<Game_Module[]>(this.game_module_api, {
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
