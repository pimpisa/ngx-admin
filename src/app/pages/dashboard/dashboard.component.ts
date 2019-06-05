import { Component, OnDestroy } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { Report_game, Report_survey, Report_page, Report_leaderboard, Report_message, Report_mostgame, Report_mostclick, Report_resource } from '../../interfaces/report';
import { Observable } from 'rxjs';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  constructor(){}

  ngOnInit() {
   
  }  
}
