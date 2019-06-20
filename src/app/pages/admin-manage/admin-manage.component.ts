import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-admin-manage',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './admin-manage.component.html',
  styleUrls: ['./admin-manage.component.scss']
})
export class AdminManageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
