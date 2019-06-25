import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

export interface Pages {
  title: string;
  icon: string;

}

@Component({
  selector: 'ngx-admin-manage',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './admin-manage.component.html',
  styleUrls: ['./admin-manage.component.scss']
})
export class AdminManageComponent implements OnInit {
  pages: Pages[] = [
    {
      title: 'Manage Sites',
      icon: 'nb-square-outline',

    },
    {
      title: 'Manage Groups',
      icon: 'nb-person',
     
    },
    {
      title: 'Manage Menu',
      icon: 'nb-keypad',
    
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
