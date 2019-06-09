import { Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'ngx-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User[] = [];
  flipped = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
   // this.loadUser
  }

  /*loadUser(){
    this.userService.getUserInfo()
      .subscribe(
        data => {
          this.user = data['data'];
          console.log("user" + JSON.stringify(this.user));

        },
        error => console.log(error));
  }*/

  toggleView() {
    this.flipped = !this.flipped;
  }

}
