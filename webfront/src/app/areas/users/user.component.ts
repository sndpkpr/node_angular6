import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<user-header></user-header>
  <div>
  <router-outlet></router-outlet>
  </div>
  <user-footer></user-footer>`
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
