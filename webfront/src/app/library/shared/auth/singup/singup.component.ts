import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
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
  passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;  // Minimum eight characters, at least one letter and one number:
  value: Date;
  captchaProved: Boolean;


  constructor(private fb: FormBuilder,
    private membershipservice: MembershipService,
    private notificationservice: NotificationService,
    private loaderService: LoaderService) { }

  ngOnInit() {
    this.captchaProved = false;
    this.createForm();
  }
  createForm() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]],
      dob: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
      // confirmPassword: ['', [Validators.required, Validators.pattern(this.passwordPattern), this.validateAreEqual.bind(this)]],
      confirmPassword: ['', [Validators.required, this.validateAreEqual.bind(this)]],
      termsCond: [''],
    });
  }
  private validateAreEqual(fieldControl: FormControl) {
    if (this.registerForm) {
      return fieldControl.value === this.registerForm.controls.password.value ? null : { notEqual: true };
    }
  }
  doSignUp() {
    if (!this.registerForm.value.termsCond) {
      this.notificationservice.Info({ message: 'Accept Terms & Conditions', title: 'Failed' });
    } else if (!this.captchaProved) {
      this.notificationservice.Error({ message: 'Check in Captcha', title: 'Captcha' });
    } else {
      this.service = this.membershipservice.signUp(this.registerForm.value).subscribe(res => {
        if (res) {

        } else {

        }
      });
    }
  }
  resolved(captchaResponse: string) {
    // console.log(`Resolved captcha with response ${captchaResponse}:`);
    if (captchaResponse) {
      this.captchaProved = true;
    }
  }

}
