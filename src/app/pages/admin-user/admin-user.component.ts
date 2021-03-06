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
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn, NgForm } from '@angular/forms';


@Component({
  selector: 'ngx-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent  {
  @ViewChild('disabledEsc', { read: TemplateRef }) disabledEscTemplate: TemplateRef<HTMLElement>;
  flipped = false;
  filterForm: FormGroup;
  groups = [];
  
  dateFormControl = new FormControl({
    start: new Date(2019, 2, 1),
    end: new Date(2019, 2, 20),
  });
  selectedGroups = 'All';

  page: any;
  large: any;
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
  commonSelectedItem: any;
  //userInfo: Observable<User[]>;
  userInfo: User = new User();
  public filterDate:string;
  fromDate: string;
  toDate: string;
  revealed = false;

  private currentPage:number = 1;
  settings = {
    actions:{
      add: false,
      delete: false,
      view: false,
      columnTitle: 'Actions',
      position: 'right',
      class: 'action-column',
      custom: [
        {
          name: 'view',
          type: 'custom',
          title: '<i class="nb-edit"></i>',
          valuePrepareFunction: (cell, row) => {
            return '<a onclick="onCustom(row.id)"</a>';
         },
          filter:false,
        }
      ],
      /** custom: [
        {
          name: 'view',
          title: '<i class="nb-edit"></i>',
          valuePrepareFunction:(cell,row)=> {
            return `<a href="#" (custom)="onCustom($event);toggleView()" <i class="nb-edit"></i></a>`
          },
          filter:false,
        }
      ],*/
    },
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
    },

  }

  constructor(private userService: UserService,
              private NbWindowService:NbWindowService, private formBuilder: FormBuilder) {
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
    
    this.filterForm = this.formBuilder.group({
      datePicker: this.formBuilder.group ({
        from: '',
        to: '',
      }),
      groups: [''],
    });
  
    this.groups = this.getGroups();
  }

  getGroups(){
    return [
      { id: '0', name: 'All' },
      { id: '1', name: 'BAs' },
      { id: '2', name: 'AEs(without CAN' },
      { id: '3', name: 'AEs(CAN)' },
      { id: '4', name: 'FSDs' },
      { id: '5', name: 'Dillard'},
      { id: '6', name: 'Boscov'},
      { id: '7', name: 'L&T Coporate'},
      { id: '8', name: 'Global Coporate'}
    ];
  }

  onSubmit(event) {
    console.log(this.filterForm.value.groups);
    console.log("datePicker -start" + this.dateFormControl.value.start);
    var r1 = this.dateFormControl.value.start;
    var r2 = this.dateFormControl.value.end;
    this.fromDate = new Date(r1).toLocaleDateString("en-US");
    this.toDate = new Date(r2).toLocaleDateString("en-US");
    console.log("fDate" + this.fromDate);
    this.filterDate = this.fromDate + " to " + this.toDate;
    this.showUserByDate(this.filterDate, this.selectedGroups);

  }
  
  toggleView() {
    this.revealed = !this.revealed;
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  showProgress(){
    console.log("showprogress");
    
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

  showUserByDate(filterDate: string, selectedGroup: string){
    console.log("showUserByDate:" + filterDate + selectedGroup);
    this.userService.getAllUsersWithFilters(filterDate,selectedGroup).subscribe(res => {
      this.allUsers = res['data'].users;
      this.source.load(this.allUsers);
    })

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
    var userSelectedId = event.selected[0].id;
    this.userService.getUserInfo(userSelectedId)
    .subscribe(
      data => {
        this.userInfo = data['data'];
        console.log("user" + JSON.stringify(this.userInfo));

      },
      error => console.log(error));
    
  }
  onCustom(event){
    console.log("custom click:");
    var id = event.data.id;
    console.log(" data"+  id);
    this.userService.getUserInfo(id)
    .subscribe(
      data => {
        this.userInfo = data['data'];
        console.log("user" + JSON.stringify(this.userInfo));

      },
      error => console.log(error));
    
  }
  
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

