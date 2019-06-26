import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError as ObservableThrowError } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/catch';


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

  private allUsersApiUrl = environment.base_api + 'user/list';
  private currentUserApiUrl = environment.base_api + 'user';
  private userByIdApi = environment.base_api + 'user/id/';
  private paginationUrl = environment.base_api + 'user/list?page=';
  private filterByDate = environment.base_api + 'user/list?page=';
  private keyToken = environment.keyToken;

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
private userInfo: any;
userDetail: Observable<User[]>;

private header:Headers = new Headers({
    'Authorization': this.keyToken
});

private setHeaders = new HttpHeaders()
  .set("Authorization", this.keyToken)

constructor(private http: HttpClient) { }

/*loadUser(): Promise<any> {
    return new Promise((resolve, reject) => {
        this.http.get('https://demo.edgagement.com/api/user', {
            'headers': new HttpHeaders().set('Authorization', 'this.keyToken')
        }).subscribe((res:any) => {
            // console.log(res);
            if(res.code == 0){
                this.user.next(res.data);
                resolve();
            }else{
               // console.log('user need login');
                reject();
            }
        }).pipe(catchError((error) => {
          window.location.href = '/login';
        }));
    });
}*/
loadUser(): Promise<any> {
  return new Promise((resolve, reject) => {
      this.http.get('https://demo.edgagement.com/api/user', {
          'headers': new HttpHeaders().set('Authorization', this.keyToken)
      }).subscribe((res:any) => {
        // console.log(res);
        if(res.code == 0){
            this.user.next(res.data);
            resolve();
        }else{
           // console.log('user need login');
           window.location.href = '/login';
        }
      },
        err => {
          window.location.href = '/login';
          }
        )
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

  return user;
 /* return this.http.get(url, {
    'headers': new HttpHeaders().set('Authorization', this.keyToken)
     });*/
}

  getUserInfo(id: string): Observable<object> {
    return this.http.get("https://demo.edgagement.com/api/user/id/" + id, {
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
    );
}

testGetAllUsers(){
    return this.http.get(this.allUsersApiUrl, {
      'headers': new HttpHeaders().set('Authorization', this.keyToken)
      
       })
       .pipe(
        catchError((error) => this._handleError(error))
      );

}
getAllUsersWithFilters(date: string, group: string){
  if(group == "All Group") {
    return this.http.get(this.allUsersApiUrl + date, {
      'headers': new HttpHeaders().set('Authorization', this.keyToken)
      
       })
       .pipe(
        catchError((error) => this._handleError(error))
      );
  } else {
  return this.http.get(this.allUsersApiUrl + date, {
    'headers': new HttpHeaders().set('Authorization', this.keyToken)
    
     })
     .pipe(
      catchError((error) => this._handleError(error))
    );
  }
  /** if(group == "All Group") {
    var parms = new HttpParams();
    parms.set('fromdate', '2/28/2017 to 3/2/2019');
    return this.http.get(this.allUsersApiUrl + date, {
      'headers': new HttpHeaders().set('Authorization', this.keyToken),
      'params': parms
       }

       )
       .pipe(
        catchError((error) => this._handleError(error))
      );
  } else {
  return this.http.get(this.allUsersApiUrl + date, {
    'headers': new HttpHeaders().set('Authorization', this.keyToken)
    
     })
     .pipe(
      catchError((error) => this._handleError(error))
    );
  } */
}
getAllUsersWithPage(page: string){
  console.log("getAllUsersWithPage " + page);
  return this.http.get(this.paginationUrl + page, {
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
