import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  title = 'Hycarebrid';
  constructor(private router: Router, translate: TranslateService, private http: HttpClient) {
    translate.setDefaultLang('en-US');
    translate.use('en-US');
   }

  ngOnInit() {
  }
}
