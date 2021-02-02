import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  private user = {} as User;

  constructor() { }

  ngOnInit() {
  }

}
