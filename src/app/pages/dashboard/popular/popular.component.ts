import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../../services/report.service';
import { Report_game, Report_survey, Report_page, Report_leaderboard, Report_message, Report_mostgame, Report_mostclick, Report_resource } from '../../../interfaces/report';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
  games:Observable<Report_game>;
  leaderboard: Observable<Report_leaderboard>;
  messages: Observable<Report_message>;
  mostclick: Observable<Report_mostclick>;
  mostgame: Observable<Report_mostgame>;
  pages: Observable<Report_page>;
  resources: Observable<Report_resource>;
  surveys: Observable<Report_survey>;

  constructor(private reportData: ReportService){}

  ngOnInit() {
   this.reportData.getOverAllReport()
    .subscribe(res => {
      console.log(res);
      this.games = res['data'].games;
      this.leaderboard = res['data'].leaderboard;
      this.messages = res['data'].messages;
      this.mostclick = res['data'].mostclick;
      this.mostgame = res['data'].mostgame;
      this.pages = res['data'].pages;
      this.resources = res['data'].resources;
      this.surveys = res['data'].surveys;
    })
  }  

}
