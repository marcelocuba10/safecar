import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  private user={} as User;

  constructor() { }

  ngOnInit() {
  }

}
