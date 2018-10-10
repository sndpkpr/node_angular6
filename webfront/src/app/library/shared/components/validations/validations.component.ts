import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent {

  constructor() { }

  private static readonly errorMessages = {
    'required': (message) => message,
    'minlength': (message) => message,
    'maxlength': (message) => message,
    'email': (message) => message,
    'pattern': (message) => message,
    'min': (message) => message
    // 'pattern': (message, params) => 'The required pattern is: ' + params.requiredPattern,
    // 'age': (message, params) => params.message,
    // 'email': (message, params) => params.message
  };
  message: string;

  @Input()
  private control: AbstractControlDirective | AbstractControl;
  @Input()
  public RequiredMessage: string;
  @Input()
  public MinMaxMessage: string;
  @Input()
  public EmailMessage: string;
  @Input()
  public PatternMessage: string;
  @Input()
  public MinMessage: string;
  @Input()
  public MaxMessage: string;

  showErrors(): boolean {
    if (this.control && this.control.errors) {
      return (this.control.touched && this.control.dirty);
    } else {
      return false;
    }
  }
  errors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]), );
  }

  private getMessage(type: string, params: {}) {

    switch (type) {
      case 'email': {
        this.message = this.EmailMessage;
        break;
      }
      case 'required': {
        this.message = this.RequiredMessage;
        break;
      }
      case 'pattern': {
        this.message = this.PatternMessage;
        break;
      }
      case 'min': {
        this.message = this.MinMessage;
        break;
      }
      case 'maxlength': {
        this.message = this.MaxMessage;
        break;
      }
    }
    return ValidationsComponent.errorMessages[type](this.message);
  }

}
