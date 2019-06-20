/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { UserService } from '../app/services/user.service';
import { User } from '../app/interfaces/user';
import { NbSpinnerService } from '@nebular/theme/services/spinner.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {


  constructor(private analytics: AnalyticsService,private testUserService: UserService, private spinnerService: NbSpinnerService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.spinnerService.registerLoader(this.testUserService.loadUser());
  }

}
