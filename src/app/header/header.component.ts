import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: User = {
    name: 'ILIA',
    password: 1234,
    token: 'sad2342fdsafs32342',
  };

  signInCondition: boolean = true;

  constructor() {}

  signIn(): void {
    if (!!this.user.name && !!this.user.password && !!this.user.token) {
      console.log('welcome');
      this.signInCondition = false;
    }
  }

  ngOnInit(): void {}
}
