import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError as ObservableThrowError } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

@Pipe({
  name: 'filter'
})
export class UserService implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
      if(!searchText) return items;
          searchText = searchText.toLowerCase();
      return items.filter( it => {
    return it.toLowerCase().includes(searchText);
    });
   }

  allUsersApiUrl = 'https://demo.edgagement.com/api/user/list';
  currentUserApiUrl = 'https://demo.edgagement.com/api/user';
  keyToken = 'blfyjKOdJPCTESy5zbC394VYYxzXnB21';

  private user = new BehaviorSubject<any>({
    name: ''
  });
  private allUsers = new BehaviorSubject<any>({
    name: '',
    id: '',
    phone: '',
    email:'',
    site_id:'',
    avatar:'',
    delivery_method:'',
    group:'',
    group_id:'',
    referrer_id:'',
    activity:'',
    updated:'',
    created:'',
    deleted:'',
    status:'',
    role:'',
    direct_report:'',
    country:'',
    zipcode:'',
    practice:'',
    hireType:''
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

getUserDetail(user: User){
  const url = this.currentUserApiUrl + "/id/" + user.id;
  console.log(url);
  console.log(user.name);
  console.log(user.id);
  console.log(user.phone);
  console.log(user.email);
  console.log(user)
  return user;
 /* return this.http.get(url, {
    'headers': new HttpHeaders().set('Authorization', this.keyToken)
     });*/
}

getUserInfo(id: string){
  return this.http.get(this.currentUserApiUrl + "/id/" + id, {
    'headers': new HttpHeaders().set('Authorization', this.keyToken)
    
     })
     .pipe(
      catchError((error) => this._handleError(error))
    );

}

editUser(user: User){
  const url = this.allUsersApiUrl + "/id/" + user.id;
  console.log(url);
  console.log("--Checking on edit user---");
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

updateUser(user: User): Observable<void> {
  console.log("--Checking on update user---");
  const userDetail = {
    phone: "83273720732",
    email: "userupdate_test@gmail.com",
    name: "Test Update",
  }
  const url = this.allUsersApiUrl + "/id/" + user.id;
  console.log("url from updateUser" + url)
  return this.http.put<void>(url, userDetail, {
    'headers': new HttpHeaders().set('Authorization', this.keyToken)
  });
}
createUser(user: User): Observable<User> {
  const url = this.allUsersApiUrl + "/id/" + user.id;
    return this.http.post<User>(url, user, {
      'headers': new HttpHeaders().set('Authorization', this.keyToken)
  });
}

deleteUser(id:number){
  const url = this.allUsersApiUrl + "/id/" + id;
  console.log(url);
  return this.http.delete(url, {
    'headers': new HttpHeaders().set('Authorization', this.keyToken)
    
     })
     .pipe(
      catchError((error) => this._handleError(error))
    );;
}

testGetAllUsers(){
    return this.http.get(this.allUsersApiUrl, {
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
/*
private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};*/
 
}
