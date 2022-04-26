import { Component } from '@angular/core';
import { FormBuilder,Validators } from "@angular/forms";

@Component({
  selector: 'app-page-sign-up',
  templateUrl: './page-sign-up.component.html',
  styleUrls: ['./page-sign-up.component.css']
})
export class PageSignUpComponent  {
//injecter mon service dans le constructeur 
// méthode .groupe de FormBuilder est juste un sucre syntaxique pr creer des instances de formGroup

  constructor(private formBuilder: FormBuilder) {}
  myForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  // Méthode qui va être déclenchée lorsque l'utilisateur va soumettre le formulaire 
  onSubmit (): void {
    console.log(this.myForm)
  } 
  }

