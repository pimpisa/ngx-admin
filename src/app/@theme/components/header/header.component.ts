import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';
import { User } from '../../../interfaces/user';
import { UserService } from '../../../services/user.service';
import { filter, map } from 'rxjs/operators';




@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'View Site' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService) {
  }

  ngOnInit() {
    this.userService.getUser()
      .subscribe((user: any) => this.user = user);

    this.menuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'headerMenu'),
        map(({ item: { title } }) => title),
      )
      .subscribe((title) => {
        if(title == "View Site") {
          window.location.href = "/home";
        } else if (title == "Log Out") {
          window.location.href = "/logout";
        }
      })
        
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
