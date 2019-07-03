import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-popular-box',
  templateUrl: './popular-box.component.html',
  styleUrls: ['./popular-box.component.scss']
})
export class PopularBoxComponent implements OnInit {

  @Input()
  public data: Object = {
    title: "Title",
    subtitle: "Sub Title",
    msg: "12 out of 123\nusers completed"
  };

  constructor() { }

  ngOnInit() {
  }

}
