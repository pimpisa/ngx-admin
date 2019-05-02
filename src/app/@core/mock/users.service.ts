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
  private pages = {
    spotlight: 'spotlight',
    marchOn: 'March On',
    buzzWorthy: 'Buzz Worthy',
    howToVideo: 'How To Video',
    gameboard: 'Gameboard',
    pink: 'PINK',
    marchOnBackUp: 'March On Back Up Stage',
    deepDive: 'Deep Dive',
    prevageDeepDive: 'Prevage Deep Dive',
    retinol: 'Retinol',
    aha: 'AHA',
    retinolDeepDive: 'Retinol Deep Dive',
    rewards: 'Rewards',
  };
  private contacts: Contacts[] = [
    { user: this.users.nick, type: this.types.dillard, page: this.pages.spotlight },
    { user: this.users.eva, type: this.types.group2, page: this.pages.marchOn},
    { user: this.users.jack, type: this.types.boscov, page: this.pages.buzzWorthy },
    { user: this.users.lee, type: this.types.landT, page: this.pages.howToVideo },
    { user: this.users.alan, type: this.types.globalCorp, page: this.pages.gameboard },
    { user: this.users.kate, type: this.types.macy, page: this.pages.pink },
  ];
  private recentUsers: RecentUsers[]  = [
    { user: this.users.alan, type: this.types.dillard, time: this.time.setHours(21, 12), page: this.pages.spotlight },
    { user: this.users.eva, type: this.types.group2, time: this.time.setHours(17, 45), page: this.pages.marchOn },
    { user: this.users.nick, type: this.types.boscov, time: this.time.setHours(5, 29), page: this.pages.buzzWorthy},
    { user: this.users.lee, type: this.types.landT, time: this.time.setHours(11, 24), page: this.pages.howToVideo },
    { user: this.users.jack, type: this.types.globalCorp, time: this.time.setHours(10, 45), page: this.pages.gameboard},
    { user: this.users.kate, type: this.types.macy, time: this.time.setHours(9, 42), page: this.pages.pink },
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
