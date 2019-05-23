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


@Component({
  selector: 'ngx-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent  {
  @ViewChild('disabledEsc', { read: TemplateRef }) disabledEscTemplate: TemplateRef<HTMLElement>;

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
  };

  source: LocalDataSource = new LocalDataSource();
  allUsers: any;
  user:any;

  constructor(private userService: UserService,
              private NbWindowService:NbWindowService) {
    this.userService.testGetAllUsers().subscribe(res => {
      this.allUsers = res['data'].users;
      this.source.load(this.allUsers);
      console.log(this.allUsers);
    }); 

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
  /*onView(user: User) {
    console.log("onViewCall" + user.id);
    let userInfo = this.userService.getUserDetail(user)
    this.user = userInfo;
      
  }*/
  onView(event,user: User){
    console.log("onview-call");
    console.log("onViewCall" + user.id);
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

