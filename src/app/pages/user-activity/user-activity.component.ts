import { Component, OnInit } from '@angular/core';
import { SmartTableData } from '../../@core/data/smart-table';
import { UserActivityService } from '../../services/user-activity.service';
import { Activity } from '../../interfaces/activity';


@Component({
  selector: 'ngx-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.scss']
})
export class UserActivityComponent implements OnInit {


  constructor(private user_act: UserActivityService) {
    
  }


  ngOnInit() {
  }

}
