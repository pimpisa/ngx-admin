import { Component, TemplateRef, ViewChild, } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbCalendarRange, NbDateService } from '@nebular/theme';
import { SmartTableData } from '../../@core/data/smart-table';
import  { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
/**Import this for popup-window */
import { NbWindowService} from '@nebular/theme'
import { WindowFormComponent } from '../modal-overlays/window/window-form/window-form.component';
import { NbWindowRef } from '@nebular/theme';
import { Observable } from 'rxjs';


@Component({
  selector: 'ngx-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent  {
  @ViewChild('disabledEsc', { read: TemplateRef }) disabledEscTemplate: TemplateRef<HTMLElement>;
  flipped = false;

  pageNo: any;
  source: LocalDataSource = new LocalDataSource();
  pageClick: number;
  allUsers: any;
  user:any;
  pageLimit: any;
  pageLimitTest = 3;
  userTotal: any;
  selected_id: any;
  userDetail: User = new User();
  userInfo: Observable<User[]>;

  private currentPage:number = 1;
  settings = {
    columns: {
      id: {
        title: 'ID',
        type: 'string',
      },
      name: {
        title: 'name',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      phone: {
        title: 'Phone',
        type: 'string',
      },
      date: {
        title: 'Date',
        filter: {
          type: 'daterange',
          config: {
            daterange: {
              format: 'mm/dd/yyyy',
            },
          }
        }
      }
    },

    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    view: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
  }

  constructor(private userService: UserService,
              private NbWindowService:NbWindowService) {
    this.userService.testGetAllUsers().subscribe(res => {
      this.allUsers = res['data'].users;
      this.pageNo = res['data'].page;
      this.pageLimit = res['data'].limit;
      this.userTotal = res['data'].total;
      this.source.load(this.allUsers);
      //this.source.setPaging(1,3,true);
      console.log(this.allUsers);
      console.log("this page no." + this.pageNo);
      console.log("this page limit" + this.pageLimit);
      console.log("user_total" + this.userTotal);
    }); 

  }
  toggleView() {
    this.flipped = !this.flipped;
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
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
  

  onPage(page: any){
    console.log("onPage-call" + page);
    this.userService.getAllUsersWithPage(page).subscribe(res => {
      this.allUsers = res['data'].users;
      this.source.load(this.allUsers);
    });    
  }

  onView(event,user: User){
    console.log("onview-call");
    console.log("onViewCall" + user);
  }

  getUser(id:string){
    console.log("getUser-id1: " + id);
    let userInfo = this.userService.getUserInfo(id);
    console.log("getUser-id2: " + userInfo);
  }

  onUserRowSelect(event) { 
    console.log('user row select: ', event); 
    console.log("event[0].id" + event.selected[0].id); 
    var userSelectedId = event.selected[0].id;
    console.log(userSelectedId);
    let user = this.userService.getUserInfo(userSelectedId);
    console.log("user-detail" + JSON.stringify(user));
    //this.userDetail = user;
    
  }
  /*onView(user: User, id: string) {
        console.log("onViewCall" + user.id);
        let userInfo = this.testUserService.getUserDetail(user)
        this.user = userInfo;
          
      }
      
  }*/
  
  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'phone',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false);
  }
}

