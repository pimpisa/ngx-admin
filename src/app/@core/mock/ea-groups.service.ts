import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { UserGroupData } from '../data/usergroup';

@Injectable({
  providedIn: 'root'
})
export class EdGroupsService extends UserGroupData {

  private userGroup = {
    nick: { name: 'Dillard\'s Corporate', id: '111' },
    eva: { name: 'Group2', id: '222' },
    jack: { name: 'Boscov\'s', id: '333' },
    lee: { name: 'L&T Corporate EA', id: '444' },
    alan: { name: 'Global Corporate EA', id: '555' },
    kate: { name: 'Macy\'s corporate 2', id: '777' },
  };


  
  getUserGroup(): Observable<any> {
    return observableOf(this.userGroup);
  }

}
