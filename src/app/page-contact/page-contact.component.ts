import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.css']
})
export class PageContactComponent {
  contactMe = this.formBuilder.group({
    'firstName': ['', Validators.required],
    'lastName': ['', Validators.required],
    'emailInfo': ['', Validators.required],
    'message': ['', Validators.required]

  })

  constructor(private formBuilder: FormBuilder) { }

  onSubmit(): void {
    console.log (this.contactMe.value);
  }

}
