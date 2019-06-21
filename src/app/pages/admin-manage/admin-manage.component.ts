import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

export interface Pages {
  title: string;

}

@Component({
  selector: 'ngx-admin-manage',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './admin-manage.component.html',
  styleUrls: ['./admin-manage.component.scss']
})
export class AdminManageComponent implements OnInit {
  private pages: Pages[] = [
    {
      title: 'Manage Sites',

    },
    {
      title: 'Manage Groups',
     
    },
    {
      title: 'Manage Menu',
    
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
