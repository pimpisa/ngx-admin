import { Component, TemplateRef, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { SmartTableComponent } from '../tables/smart-table/smart-table.component'
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { NbCalendarRange, NbDateService } from '@nebular/theme';
/**Import this for the dummy users */
import { Contacts, RecentUsers, UserData } from '../../@core/data/users';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
/**Import this for popup-window */
import { NbWindowService} from '@nebular/theme'
import { WindowFormComponent } from '../modal-overlays/window/window-form/window-form.component';
import { NbWindowRef } from '@nebular/theme';
/**Get user from HTTP */
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { StringMap } from '@angular/core/src/render3/jit/compiler_facade_interface';


@Component({
  selector: 'ngx-admin-users',
  styleUrls: ['./admin-users.component.scss'],
  templateUrl: './admin-users.component.html',
})
export class AdminUsersComponent implements OnInit{
  @ViewChild('disabledEsc', { read: TemplateRef }) disabledEscTemplate: TemplateRef<HTMLElement>;
  private alive = true;
  contacts: any[];
  recent: any[];
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  title = 'app';
  arrCase: object [];
  allUsers: User[];
  user: any;
  private usersObservable : Observable<User[]> ; 
  private users: User[] = [];

  //private users: any = [];

  constructor(private userService: UserData,
    private themeService: NbThemeService,
    private breakpointService: NbMediaBreakpointsService, 
    private NbWindowService:NbWindowService,
    private testUserService: UserService,
    private http: HttpClient) {
      this.breakpoints = this.breakpointService.getBreakpointsMap();
      this.themeService.onMediaQueryChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(([oldValue, newValue]) => {
      this.breakpoint = newValue;
    
  });
  forkJoin(
    this.userService.getContacts(),
    this.userService.getRecentUsers(),
  )
    .pipe(takeWhile(() => this.alive))
    .subscribe(([contacts, recent]: [Contacts[], RecentUsers[]]) => {
      this.contacts = contacts;
      this.recent = recent;
    });
}

    openWindow(contentTemplate) {
      this.NbWindowService.open(
        contentTemplate,
        {
          title: '',
          context: {
            text: 'some text to pass into template',
          },
        },
      );
    }

    settings = {
        actions: {
            add: false,
            edit:false,
            delete:false
        },
        columns: {
          username: {
            title: 'Username',
            type: 'string',
          },
          view: {
            addButtonContent: '<i class="fa fa-address-card"></i>',
            icon: 'fa fa-address-card',
          },
        },
      };
      source: LocalDataSource = new LocalDataSource();
      
      ngOnInit(){
        this.testUserService.testGetAllUsers().subscribe(res => {
            this.allUsers = res['data'].users;
        }); 
  
      }

      onView(user: User, id: string):void {
        /*this.testUserService.getUserDetail(user).subscribe(res => {
            this.user = res['data'].users;
            console.log(id);
        });*/
        console.log(id);
        this.testUserService.getUserDetail(user,id);
          
      }
      onEdit(user: User): void {
        this.testUserService.editUser(user);
      }
      
        
}

