import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  allUsersApiUrl = 'https://demo.edgagement.com/api/users';
  currentUserApiUrl = 'https://demo.edgagement.com/api/user';
  keyToken = 'blfyjKOdJPCTESy5zbC394VYYxzXnB21';

  private user = new BehaviorSubject<any>({
    name: ''
});

private header:Headers = new Headers({
    'Authorization': 'blfyjKOdJPCTESy5zbC394VYYxzXnB21'
});
constructor(private http: HttpClient) { }

loadUser(): Promise<any> {
    return new Promise((resolve, reject) => {
        this.http.get('https://demo.edgagement.com/api/user', {
            'headers': new HttpHeaders().set('Authorization', this.keyToken)
        }).subscribe((res:any) => {
            console.log(res);
            if(res.code == 0){
                this.user.next(res.data);
                resolve();
            }else{
                console.log('user need login');
                reject();
            }
        });
    });
}

loadAllUser():Promise<any> {
  return new Promise((resolve, reject) => {
    this.http.get('https://demo.edgagement.com/api/users', {
      'headers': new HttpHeaders().set('Authorizaton', this.keyToken)
    }).subscribe((res:any) => {
      
      if(res.code == 0) {
        console.log(res);
      }else{
        console.log('not authorized');
        reject();
      }
    });
  });
}

getUser() {
    return this.user.asObservable();
}

  
 
  getUsers(){
    return this.http
      .get<User[]>(this.apiUrl);
      
  }
  getCurrentUser(){
    return this.http.get(this.currentUserApiUrl, 
      {headers: new HttpHeaders().set('Authorization', this.keyToken) 

    });
  }
 
  getAllUsers(){
    return this.http.get<User[]>(this.allUsersApiUrl,
       {headers: new HttpHeaders().set('Authorization', this.keyToken) });
  }
  getUserDetail(){
    return false
  }
 
}
