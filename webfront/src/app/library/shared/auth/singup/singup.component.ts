import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../../core/services/notification-service/notification.service';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../services/loader/loader.service';
import { CookieService } from 'ngx-cookie';
import { MembershipService } from 'src/app/library/core/services/membership-service/membership.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  registerForm: FormGroup;
  service: Subscription;
  emailPattern = /^([\w-\.]+\u0040([\w-]+\.)+[\w-]{2,4})?$/;

  constructor(private fb: FormBuilder,
    private membershipservice: MembershipService,
    private notificationservice: NotificationService,
    private loaderService: LoaderService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
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

}
