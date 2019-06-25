import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.scss']
})
export class CircleChartComponent implements OnInit {

  @Input()
  public options:Object = {
    type: "circle",
    percent: 5
  };

  constructor() { }

  ngOnInit() {
  }

}
