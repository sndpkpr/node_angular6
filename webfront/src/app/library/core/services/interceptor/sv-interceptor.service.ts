import { Injectable, Injector } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MembershipService } from '../membership-service/membership.service';
import { CookieService } from 'ngx-cookie';
import { tap } from 'rxjs/operators';
import { ApiService } from '../api-service/api.service';

@Injectable()
export class SvInterceptorService implements HttpInterceptor {
  membershipservice: MembershipService;

  constructor(private cookie: CookieService, public apiservice: ApiService) {}
  intercept(
    // tslint:disable-next-line:no-any
    req: HttpRequest<any>,
    next: HttpHandler
  // tslint:disable-next-line:no-any
  ): Observable<HttpEvent<any>> {
    if (req.body) {
      req.headers.append('Content-Type', 'application/json');
      req.headers.append('If-Modified-Since', 'Mon, 26 Jul 1997 05:00:00 GMT');
      req.headers.append('Cache-Control', 'no-cache');
      req.headers.append('Pragma', 'no-cache');
     }
     // const token = this.cookie.check('token') ? this.cookie.get('token') : null;
    //  const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
     if (this.apiservice.getToken()) {
       req = req.clone({
         setHeaders: {
           Authorization: `Bearer ${this.apiservice.getToken()}`
         }
       });
     }

    return next.handle(req).pipe(tap(
      // tslint:disable-next-line:no-any
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
          // tslint:disable-next-line:no-unused-expression
          (event.status === 403) ? this.membershipservice.logout() : null;
        }
      },
      // tslint:disable-next-line:no-any
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
        }
      }
    ));
  }
}
