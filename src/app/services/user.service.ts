import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  allUsersApiUrl = 'https://demo.edgagement.com/api/users';
  currentUserApiUrl = 'https://demo.edgagement.com/api/user';
  keyToken = 'blfyjKOdJPCTESy5zbC394VYYxzXnB21';

  constructor(private http: HttpClient) { }
 
  getUsers(){
    return this.http
      .get<User[]>(this.apiUrl);
      
  }
  getCurrentUser(){
    return this.http.get(this.currentUserApiUrl, 
      {headers: new HttpHeaders().set('Authorization', this.keyToken) });
  }
  /*getAllUsers(){ -- Not autorized --
    return this.http.get(this.allUsersApiUrl,
       {headers: new HttpHeaders().set('Authorization', this.keyToken) });
  }*/
  getAllUsers(){
    return this.http.get<User[]>(this.allUsersApiUrl,
       {headers: new HttpHeaders().set('Authorization', this.keyToken) });
  }
  getUserDetail(){
    return false
  }
  /*getData(){
    this.http.get(this.url).subscribe(res => {
      this.users = res
    });
  }*/

}
