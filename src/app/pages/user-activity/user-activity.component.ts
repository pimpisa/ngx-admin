import { Component, OnInit } from '@angular/core';
import { SmartTableData } from '../../@core/data/smart-table';
import { UserActivityService } from '../../services/user-activity.service';
import { Activity } from '../../interfaces/activity';
import { LocalDataSource } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'ngx-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.scss']
})
export class UserActivityComponent implements OnInit {

  user_activty: Activity[] = [];
  //user_activty: any;
  source: LocalDataSource = new LocalDataSource();
  pageNo: string;
  pageLimit: string;
  userTotal: string;

  settings = {
    actions: false,
    columns: {
      id: {
        title: 'ID',
        type: 'string',
        filter: false,
      },
      name: {
        title: 'name',
        type: 'string',
        filter: false,
      },
      last_activity: {
        title: 'last activity',
        filter: false,
          type: 'date',
            valuePrepareFunction: (last_activity) => {
              if (last_activity) {
                return new DatePipe("en-US").transform(last_activity, 'MM/dd/yyyy hh:mm:ss');
                //return new Date(updated).toDateString();
              }
            return null;
            },
            sort: false
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

  constructor(private activityService: UserActivityService) {
    this.loadUserActivity();
  }

  loadUserActivity(){
    this.activityService.getActivity()
      .subscribe(
        res => {
          this.user_activty = res['data'].data;
          this.pageNo = res['data'].page;
          this.pageLimit = res['data'].limit;
          this.userTotal = res['data'].total;
          console.log("user_activity" + JSON.stringify(this.user_activty));
          console.log("this.pageNo" + JSON.stringify(this.pageNo));
          console.log("this.pageLimit" + JSON.stringify(this.pageLimit));
          console.log("this.userTotal" + JSON.stringify(this.userTotal));
          //console.log(this,this.user_activty.updated.ts.toLocaleString());
          this.source.load(this.user_activty);

        },
        error => console.log(error));
    
  }

  onPage(page: any){
    console.log("onPage-call" + page);
    this.activityService.getActivityWithPage(page).subscribe(res => {
      this.user_activty = res['data'].data;
      this.source.load(this.user_activty);
    });    
  }

  ngOnInit() {
  }

}
