import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NotificationService } from '../../../../core/services/notification-service/notification.service';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../../services/loader/loader.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailPattern = /^([\w-\.]+\u0040([\w-]+\.)+[\w-]{2,4})?$/;

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private fb: FormBuilder,
    private notificationservice: NotificationService,
    private loaderService: LoaderService) { }

  ngOnInit() {
  }
  createForm() {
    this.loginForm = this.fb.group({
      Username: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      Password: ['', Validators.required]
    });
  }
  doLogin() {
    console.log('doLogin');
  }

}
