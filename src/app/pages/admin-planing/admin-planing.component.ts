import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'ngx-admin-planing',
  templateUrl: './admin-planing.component.html',
  styleUrls: ['./admin-planing.component.scss']
})
export class AdminPlaningComponent implements OnInit {

  calendarPlugins = [dayGridPlugin];

  constructor() { }

  ngOnInit() {
  }

}
