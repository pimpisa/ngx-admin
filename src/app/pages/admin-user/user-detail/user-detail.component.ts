import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'ngx-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
