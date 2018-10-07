import { ErrorHandler, Injectable } from '@angular/core';
import { StatusMessage, StatusCode } from '../../config/constants';
import { NotificationService } from '../../services/notification-service/notification.service';
import { debug } from 'util';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {
  constructor(private notificationservice: NotificationService, private cookie: CookieService,
    private router: Router) { }

  handleError(error) {
    switch (error) {
      case StatusCode.Unauthorized: {
        // this.notificationservice.Warning({
        //   message: StatusMessage.Unauthorized,
        //   title: ''
        // });

        this.cookie.remove('userdetails');
        this.cookie.remove('token');
        localStorage.clear();
        this.router.navigate(['/companylogin']);

        break;
      }
      case StatusCode.BadRequest: {
        this.notificationservice.Warning({
          message: StatusMessage.BadRequest,
          title: ''
        });
        break;
      }
      case StatusCode.Forbidden: {
        this.notificationservice.Warning({
          message: StatusMessage.Forbidden,
          title: ''
        });
        this.removeCredentials();
        break;
      }
      case StatusCode.InteralServerError: {
        console.log(error);
        break;
      }
      case StatusCode.NotFound: {
        this.notificationservice.Warning({
          message: StatusMessage.NotFound,
          title: ''
        });
        break;
      }
      default: {
      }
    }
  }

  removeCredentials() {
    this.cookie.remove('userdetails');
    this.cookie.remove('token');
    this.cookie.remove('repository');
    this.cookie.remove('IsPopupActive');
    // this.cookie.remove('NZcookieObj');
    localStorage.clear();
  }
}
