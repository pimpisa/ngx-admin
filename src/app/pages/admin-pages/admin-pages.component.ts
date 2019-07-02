import { Component, OnDestroy } from '@angular/core';
/**Dummy Users */
import { Contacts, RecentUsers, UserData } from '../../@core/data/users';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { LocalDataSource } from 'ng2-smart-table';
/**Import this for popup-window */
import { NbWindowService} from '@nebular/theme';
import { WindowFormComponent } from '../modal-overlays/window/window-form/window-form.component';
import { NbWindowRef } from '@nebular/theme';

@Component({
    selector: 'ngx-admin-pages',
    styleUrls: ['./admin-pages.component.scss'],
    templateUrl: './admin-pages.component.html',
  })
export class AdminPagesComponent{
    private alive = true;
    pages = [
        {id: 1, name: 'spotlight'},
        {id: 2, name: 'March On'},
        {id: 3, name: 'Buzz Worthy'},
        {id: 4, name: 'How To Video'},
        {id: 5, name: 'Gameboard'},
        {id: 6, name: 'PINK'},
        {id: 7, name: 'March On Back Up Stage'},
        {id: 8, name: 'Deep Dive'},
        {id: 9, name: 'Prevage Deep Dive'},
        {id: 10, name: 'Retinol'},
        {id: 11, name: 'AHA'},
        {id: 12, name: 'Retinol Deep Dive'},
        {id: 13, name: 'Rewards'},
        {id: 14, name: 'White Tea'}
    ];
    permission_group = [
        {id: 1, name: 'Guest'},
        {id: 2, name: 'Web Session'},
        {id: 3, name: 'Beauty Advisor'},
        {id: 4, name: 'Account Executive'},
        {id: 5, name: 'FSD Access'},
        {id: 6, name: 'Admin'},
        {id: 7, name: 'Hide'},
        {id: 8, name: 'Group'},
    ];
    contacts: any[];
    recent: any[];
    breakpoint: NbMediaBreakpoint;
    breakpoints: any;

    constructor(private userService: UserData,
        private themeService: NbThemeService,
        private breakpointService: NbMediaBreakpointsService, 
        private NbWindowService:NbWindowService,private windowService: NbWindowService) {
          this.breakpoints = this.breakpointService.getBreakpointsMap();
          this.themeService.onMediaQueryChange()
          .pipe(takeWhile(() => this.alive))
          .subscribe(([oldValue, newValue]) => {
          this.breakpoint = newValue;
        
      });

      forkJoin(
        this.userService.getContacts(),
        this.userService.getRecentUsers(),
      )
        .pipe(takeWhile(() => this.alive))
        .subscribe(([contacts, recent]: [Contacts[], RecentUsers[]]) => {
          this.contacts = contacts;
          this.recent = recent;
        });
      }
      openWindow(contentTemplate) {
        this.NbWindowService.open(
          contentTemplate,
          {
            title: '',
            context: {
              text: 'some text to pass into template',
            },
          },
        );
      }

      savePage(){
        console.log("save page called");
        
      }

}

