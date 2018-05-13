import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {zipcodeValidator, passValidator} from './validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  form: FormGroup;
  constructor(private fb: FormBuilder){
    this.form  = this.fb.group({
      username: ['', [Validators.required,Validators.minLength(4)]],
      password: '',
      cnfpass: ['', passValidator],
      zip: ['', zipcodeValidator]
    });


    this.form.controls.password.valueChanges
    .subscribe(
      x => this.form.controls.cnfpass.updateValueAndValidity()
    )
  }


  onSubmit(){
    // console.log(this.form.controls.zip);
    this.form.markAsTouched();
  }
}
