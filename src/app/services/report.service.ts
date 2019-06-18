import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Report_game, Report_survey, Report_page, Report_leaderboard, Report_message, Report_mostgame, Report_mostclick, Report_resource } from '../interfaces/report';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private overall_report_API = environment.base_api+'report/overall';
  private keyToken = environment.keyToken;

  constructor(private http: HttpClient) { }

  getOverAllReport() {
    return this.http.get(this.overall_report_API, {
      'headers': new HttpHeaders().set('Authorization', this.keyToken)
      
       })
       .map(result => result);
  }

  getLeaders() {
    return this.http.get("").map(result => result);
  }

}
