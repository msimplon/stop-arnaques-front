import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-page-sign-up',
  templateUrl: './page-sign-up.component.html',
  styleUrls: ['./page-sign-up.component.css']
})
export class PageSignUpComponent implements OnInit {
  public signUpForm!: FormGroup;
  fieldTextType: boolean = false;


  constructor(private fb : FormBuilder, private authService: AuthentificationService) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8),Validators.required]],
      confirmPassword: ['', [Validators.required]]


    },
    {
      validator: this.passwordMatchValidator
    }
    );

  }
  passwordMatchValidator(form: FormGroup) {

  
    // Le point d'interrogation permet de ne pas 
    // accéder à la valeur de 'value' si le password est 'null' 
    if (form.get('password')?.value === form.get('confirmPassword')?.value) {
      return null;
    } else {
      return { mismatch: true };
    }
  }

onSubmitForm (){
console.log (this.signUpForm.value);
const username = this.signUpForm.value.username;
const password = this.signUpForm.value.password;



this.authService.registerUser(username, password).subscribe ((reponseAPI) => {
console.log(reponseAPI);
})


}

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }


}

