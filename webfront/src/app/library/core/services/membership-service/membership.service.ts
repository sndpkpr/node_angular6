import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApiService } from 'src/app/library/core/services/api-service/api.service';
import { CoreAPIURLs } from '../../config/constants';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private http: HttpClient, private apiservice: ApiService, private cookie: CookieService, private router: Router) { }
  login(body: {}) {
    // logic for login
    return this.apiservice.postData(CoreAPIURLs.loginUrl, body, null)
      .pipe(map((res: any) => {
        if (res && res.status === 200) {
          return res;
          // return this.getUserByName('api/Account/GetuserDetailsByUserName',body);
        }
      }));
  }

  logout() {
    this.removeCredentials();
    this.router.navigate(['/home/global/companylogin']);
  }

  isLoggedIn(): boolean {
    return this.apiservice.getToken() ? true : false;
  }

  // private setUserCookie(data: IMembershipModel) {
  //   this.removeCredentials();
  //   let lang = '';
  //   if (this.cookie.get('language')) {
  //     lang = this.cookie.get('language');
  //   } else {
  //     /**Set language according to timezone if language not found in cookies */
  //     lang = 'en-US';
  //   }
  //   this.cookie.putObject('lang', lang);
  //  // this.cookie.put('token', this.token);
  //  this.cookie.putObject('token', this.token);
  //   this.cookie.put('UserRole', data.UserRole);
  //   this.cookie.putObject('userdetails', data);
  //   localStorage.setItem('token', this.token);
  // }

  setCookie(key: string, value: string) {
    this.cookie.put(key, value);
  }

  getUserDetails(key: string) {
    const userDetails = this.cookie.getObject('userdetails');
    if (userDetails === undefined) { return ''; } else { return userDetails[key]; }
  }

  // getCookieObject(key: string): IMembershipModel {
  //   const obj = this.cookie.getObject(key);
  //   if (obj === undefined) { return {}; } else {
  //     return obj;
  //   }
  // }

  getAllCookies(): {} {
    return this.cookie.getAll();
  }

  signUp(body: {}) {
    // logic for login
    return this.apiservice.postData(CoreAPIURLs.registerUrl, body, null)
      .pipe(map((res) => {
        if (res) {
          console.log(res.status);
          return res;
          // return this.getUserByName('api/Account/GetuserDetailsByUserName',body);
        }
      }));
  }
  removeCredentials() {
    this.cookie.remove('userdetails');
    this.cookie.remove('token');
    this.cookie.remove('repository');
    // this.cookie.remove('NZcookieObj');
    localStorage.clear();
  }

  getCookie(key: string) {
    return this.cookie.get(key);
  }
}
