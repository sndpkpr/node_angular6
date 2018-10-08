import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../../../core/services/notification-service/notification.service';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../../services/loader/loader.service';
import { CookieService } from 'ngx-cookie';
import { MembershipService } from 'src/app/library/core/services/membership-service/membership.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  service: Subscription;
  emailPattern = /^([\w-\.]+\u0040([\w-]+\.)+[\w-]{2,4})?$/;

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private fb: FormBuilder,
    private membershipservice: MembershipService,
    private notificationservice: NotificationService,
    private loaderService: LoaderService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', Validators.required]
    });
  }
  doLogin() {
    console.log('doLogin', this.loginForm.value);

    this.service = this.membershipservice.login(this.loginForm.value).subscribe(res => {
      if (res) {

      } else {

      }
    });
  }

}
