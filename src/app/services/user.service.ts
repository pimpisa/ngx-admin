import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs/observable';
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
  private allUsers = new BehaviorSubject<any>({
    name: '',
    id: '',
    phone: '',
    email:''
  });
  

private allUser: User;

private header:Headers = new Headers({
    'Authorization': 'blfyjKOdJPCTESy5zbC394VYYxzXnB21'
});

private setHeaders = new HttpHeaders()
  .set("Authorization","blfyjKOdJPCTESy5zbC394VYYxzXnB21")

constructor(private http: HttpClient) { }

loadUser(): Promise<any> {
    return new Promise((resolve, reject) => {
        this.http.get('https://demo.edgagement.com/api/user', {
            'headers': new HttpHeaders().set('Authorization', this.keyToken)
        }).subscribe((res:any) => {
            //console.log(res);
            if(res.code == 0){
                this.user.next(res.data);
                resolve();
            }else{
               // console.log('user need login');
                reject();
            }
        });
    });
}

loadAllUsers():Promise<any> {
  return new Promise((resolve, reject) => {
    this.http.get(this.allUsersApiUrl, {
      'headers': new HttpHeaders().set('Authorizaton', this.keyToken)
    }).subscribe((res:any) => {
      console.log("this is all user "+res);
      if(res.code == 0) {
        this.allUsers.next(res.data);
        resolve();
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
getAllUsers() {
  return this.allUsers
}

getUserDetail(user: User, id: string){
  const url = this.allUsersApiUrl + "/id/" + user.id;
  console.log(user.name);
  console.log(user.id);
  console.log(user.phone);
  console.log(user.email);
    return user;
}
editUser(user: User){
  const url = this.allUsersApiUrl + "/id/" + user.id;
  console.log(user.name);
  console.log(user.id);
  console.log(user.phone);
  console.log(user.email);
  const userDetail = {
    id: user.id,
    phone: user.phone,
    email: user.email,
    name: user.name
  }
  return this.http.put(url, userDetail, {
    'headers': new HttpHeaders().set('Authorization', this.keyToken)
     });
}
deleteUser(id:number){
  const url = this.allUsersApiUrl + "/id/" + id;
  console.log(url);
  return this.http.delete(url, {
    'headers': new HttpHeaders().set('Authorization', this.keyToken)
    
     });
}

testGetAllUsers(){
    return this.http.get(this.allUsersApiUrl, {
      'headers': new HttpHeaders().set('Authorization', this.keyToken)
      
       });

}
 
}
