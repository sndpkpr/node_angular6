import { Component, OnInit } from '@angular/core';
import {AutoCompleteModule} from 'primeng/autocomplete';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  text: string;
  results: string[];

  constructor() { }

  ngOnInit() {
  }

}
