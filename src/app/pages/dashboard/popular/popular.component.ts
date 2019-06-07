import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../../services/report.service';
import { Report_game, Report_survey, Report_page, Report_leaderboard, Report_message, Report_mostgame, Report_mostclick, Report_resource } from '../../../interfaces/report';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent {
  mostclick: Observable<Report_mostclick>;
  mostgame: Observable<Report_mostgame>;
  resources: Observable<Report_resource>;
  //Game
  game_title: any;
  game_completed: any;
  game_total: any;
  //Click
  click_title: any;
  click_count: any;
  //Resources
  res_title: any;
  res_count: any;

  constructor(private reportData: ReportService){
    this.reportData.getOverAllReport()
    .subscribe(res => {
      this.game_title = res['data'].mostgame.title;
      this.game_completed = res['data'].mostgame.completed;
      this.game_total = res['data'].mostgame.total;
      this.click_title = res['data'].mostclick.title;
      this.click_count = res['data'].mostclick.count;
      this.res_title = res['data'].resources.title;
      this.res_count = res['data'].resources.count;
      console.log("data" + res);
      console.log("this.game_title" + this.game_title);
    })
  }

}
