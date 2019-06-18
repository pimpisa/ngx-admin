import { Component, OnInit } from '@angular/core';
import { SmartTableData } from '../../@core/data/smart-table';
import { UserActivityService } from '../../services/user-activity.service';
import { Activity } from '../../interfaces/activity';
import { LocalDataSource } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngx-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.scss'],
  providers: [NgbPaginationConfig]
})
export class UserActivityComponent implements OnInit {

  user_activty: Activity[] = [];
  //user_activty: any;
  source: LocalDataSource = new LocalDataSource();
  pageNo: string;
  pageLimit: string;
  userTotal: string;
  datePipe: DatePipe;
  page: any;

  settings = {
    actions: false,
    pager: false,
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
      usage: {
        title: 'name',
        type: 'string',
        filter: false,
      },
      /*last_activity: {
        title: 'last activity',
        filter: false,
          type: 'date',
            valuePrepareFunction: (value) => {
            if(value){
              return this.transformDate(value);
            }
            return null;
          },
          sort:false
              }*/
      last_activity : {
        title: 'last activity',
        filter: false,
          type: 'date',
            valuePrepareFunction: (date) => {
              console.log("value---"+date);
              if (date) {
                return new DatePipe("en-US").transform(date, 'MM/dd/yyyy hh:mm');
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

  constructor(private activityService: UserActivityService, config: NgbPaginationConfig) {
    this.loadUserActivity();
    config.boundaryLinks = true;
    config.maxSize = 10;
    config.directionLinks = true;
    config.maxSize = 10;
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
