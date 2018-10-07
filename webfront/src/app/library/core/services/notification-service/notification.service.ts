import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class NotificationService {
  public checkGuard = true;
  public notificationCount: number;
  public messageNotificationCount: number;
  public  restrictFunnelOnReload: boolean;
  constructor(private toastr: ToastrService, private translateservice: TranslateService, private cookie: CookieService) {
    this.toastr.toastrConfig.closeButton = false;
    this.toastr.toastrConfig.autoDismiss = true;
    this.toastr.toastrConfig.tapToDismiss = true;
    this.notificationCount = 0;
    this.messageNotificationCount = 0;
  }
  // set notification  count
  SetNotificationCountInHeader(notificationCount?: number) {
    this.notificationCount = notificationCount;
  }
  // set notification  count
  GetNotificationCountInHeader() {
    return this.notificationCount;
  }

  // set message  count
  SetMessageCountInHeader(messagecount?: number) {
    this.messageNotificationCount = messagecount;
  }
  // set message  count
  GetMessageCountInHeader() {
    return this.messageNotificationCount;
  }

  Success(body: { message?: string, title?: string }) {
    return this.toastr.success(this.TranslateMessage(body.message), body.title);
  }

  Error(body: { message?: string, title?: string }) {
    return this.toastr.error(this.TranslateMessage(body.message), body.title);
  }

  Warning(body: { message?: string, title?: string }) {
    return this.toastr.warning(this.TranslateMessage(body.message), body.title);
  }

  Info(body: { message?: string, title?: string }) {
    return this.toastr.info(this.TranslateMessage(body.message), body.title);
  }

  private TranslateMessage(message: string): string {
    let returnMsg = '';
  //  this.translateservice.setDefaultLang(this.cookie.get('language'));
    this.translateservice.get(message).subscribe(res => {
      returnMsg = res;
    }, err => {
    });
    return returnMsg;
  }
  closeAllToaster() {
    this.toastr.clear();
  }
}
