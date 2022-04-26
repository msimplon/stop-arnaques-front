import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.css']
})
export class PageSignInComponent {

  signInForm = this.formBuilder.group({
    'username': ['', Validators.required],
    'password': ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder) { }

  onSubmit(): void {
    console.log(this.signInForm.value);
  }

}
