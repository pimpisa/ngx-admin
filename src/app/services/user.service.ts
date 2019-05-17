import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http: HttpClient) { }

  /*getUsers(){
    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(map((users: User[]) => users.map(user => new User(user))));
  }*/
  getUsers(){
    return this.http
      .get<User[]>(this.apiUrl);
      
  }
}
