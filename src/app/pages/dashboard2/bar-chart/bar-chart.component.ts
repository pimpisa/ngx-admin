import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input()
  public options:Object = {
    type: "circle",
    percent: 5
  };
  constructor() { }

  ngOnInit() {
  }

}
