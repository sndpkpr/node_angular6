import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hycarebrid';
  constructor(private router: Router, translate: TranslateService) {
    translate.setDefaultLang('en-US');
    translate.use('en-US');
   }

  ngOnInit() {
  }
}
