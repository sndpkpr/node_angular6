import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../../core/services/notification-service/notification.service';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../services/loader/loader.service';
import { CookieService } from 'ngx-cookie';
import { MembershipService } from 'src/app/library/core/services/membership-service/membership.service';
import { CalendarModule } from 'primeng/calendar';
import { RecaptchaModule } from 'ng-recaptcha';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  registerForm: FormGroup;
  service: Subscription;
  emailPattern = /^([\w-\.]+\u0040([\w-]+\.)+[\w-]{2,4})?$/;
  value: Date;

  constructor(private fb: FormBuilder,
    private membershipservice: MembershipService,
    private notificationservice: NotificationService,
    private loaderService: LoaderService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]],
      dob: ['', [Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      termsCond: ['', [Validators.required]],
    });
  }
  doSignUp() {
    console.log('doLogin', this.registerForm.value);

    this.service = this.membershipservice.signUp(this.registerForm.value).subscribe(res => {
      if (res) {

      } else {

      }
    });
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

}
