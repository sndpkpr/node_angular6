import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApiService } from 'src/app/library/core/services/api-service/api.service';
import { CoreAPIURLs } from '../../config/constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private http: HttpClient, private apiservice: ApiService) { }
  login(body: {}) {
    // logic for login
    return this.apiservice.postData(CoreAPIURLs.loginUrl, body, null)
      .pipe(map((res) => {
        if (res) {
          return res;
          // return this.getUserByName('api/Account/GetuserDetailsByUserName',body);
        }
      }));
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
}
