import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../../../../../environments/environment';
import { CookieService } from 'ngx-cookie';
import { ErrorHandlerService } from '../error-handler/error-handler.service';

import { ApiParams } from '../api-service/view-model/api-params';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class ApiService {

  // constructor(private http: HttpClient, private cookie: CookieService, private errorhandler: ErrorHandlerService) { }

  // // common get method for all http requests

  // getData(url: string, reqAPIParams: ApiParams[] | null) {
  //   let newHTTPParams = new HttpParams();
  //   if (reqAPIParams != null) {
  //     reqAPIParams.forEach(element => {
  //       newHTTPParams = newHTTPParams.append(element.Key, element.Value);
  //     });
  //   }
  //   return this.http.get(this.getUrl(url), { params: newHTTPParams, observe: 'response' }).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // // common post method for all http requests

  // postData<T>(url: string, data: {}, reqAPIParams: ApiParams[]) {
  //   let newHTTPParams = new HttpParams();
  //   if (reqAPIParams != null) {
  //     reqAPIParams.forEach(element => {
  //       newHTTPParams = newHTTPParams.append(element.Key, element.Value);
  //     });
  //   }
  //   return this.http.post<T>(this.getUrl(url), data, { params: newHTTPParams, observe: 'response' }).pipe(
  //     catchError(this.handleError)
  //     );
  // }

  // // common error handling method
  // public handleError = (error: Response) => {
  //   // Do messaging and error handling here
  //   this.errorhandler.handleError(error.status);
  //   return Observable.throw(error);
  // }

  // // attach base url
  // private getUrl(url: string): string {
  //   // return environment.baseUrl + url;
  //   return 'sss';
  // }

  // getToken(): string {
  //   const token = this.cookie.get('token') ? this.cookie.get('token') : null;
  //   return token;
  // }
}

