import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contacts, RecentUsers, UserData } from '../data/users';

@Injectable()
export class UserService extends UserData {

  private time: Date = new Date;

  private users = {
    nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
    eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
    jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
    lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
    alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
    kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
  };
  private types = {
    dillard: 'Dillard\'s Corporate',
    group2: 'Group 2',
    boscov: 'Boscov\'s',
    landT: 'L&T Corporate',
    globalCorp: 'Global Coporate EA',
    macy: 'Macy\'s Corporate 2',

  };
  private contacts: Contacts[] = [
    { user: this.users.nick, type: this.types.dillard },
    { user: this.users.eva, type: this.types.group2 },
    { user: this.users.jack, type: this.types.boscov },
    { user: this.users.lee, type: this.types.landT },
    { user: this.users.alan, type: this.types.globalCorp },
    { user: this.users.kate, type: this.types.macy },
  ];
  private recentUsers: RecentUsers[]  = [
    { user: this.users.alan, type: this.types.dillard, time: this.time.setHours(21, 12)},
    { user: this.users.eva, type: this.types.group2, time: this.time.setHours(17, 45)},
    { user: this.users.nick, type: this.types.boscov, time: this.time.setHours(5, 29)},
    { user: this.users.lee, type: this.types.landT, time: this.time.setHours(11, 24)},
    { user: this.users.jack, type: this.types.globalCorp, time: this.time.setHours(10, 45)},
    { user: this.users.kate, type: this.types.macy, time: this.time.setHours(9, 42)},
    { user: this.users.kate, type: this.types.dillard, time: this.time.setHours(9, 31)},
    { user: this.users.jack, type: this.types.group2, time: this.time.setHours(8, 0)},
  ];

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getContacts(): Observable<Contacts[]> {
    return observableOf(this.contacts);
  }

  getRecentUsers(): Observable<RecentUsers[]> {
    return observableOf(this.recentUsers);
  }
}
