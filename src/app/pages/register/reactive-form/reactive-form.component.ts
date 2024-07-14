import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

function mustContainCentricEmailDomain (control: AbstractControl) {
  if(control.value.includes('@centric')) {
    return null;
  }
  return {doesNotContainCentricEmailDomain: true};
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  formValues: unknown;

  ngOnInit() {
    //Add a listener to the valueChanges event of the password control 
    //and display the value on the console.

    //Add a listener to the valueChanges event of the name control and use the value 
    //to set the email control value to the name value followed by "@centric.com".
  }

  form = new FormGroup({
    name: new FormControl('', {
      validators: [
        Validators.required
      ]
    }),
    email: new FormControl('', {
      validators: [
        Validators.required,
        mustContainCentricEmailDomain
      ]
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]
    })
  });

  get isEmailInvalid() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.invalid
    );
  }

  get isNameInvalid() {
    return (
      this.form.controls.name.touched &&
      this.form.controls.name.invalid
    );
  }

  get isPasswordInvalid() {
    return (
      this.form.controls.password.touched &&
      this.form.controls.password.invalid
    );
  }

  onSubmit() {
    if(!this.isEmailInvalid && !this.isNameInvalid && !this.isPasswordInvalid) {
      this.formValues = this.form.value;
    }
  }
}
