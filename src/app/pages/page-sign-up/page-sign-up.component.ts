import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-page-sign-up',
  templateUrl: './page-sign-up.component.html',
  styleUrls: ['./page-sign-up.component.css']
})
export class PageSignUpComponent implements OnInit {
  public signUpForm!: FormGroup;
  submitted = false; 

  constructor(private fb: FormBuilder, private authService: AuthentificationService, private router: Router) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(12),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: this.passwordMatchValidator,
        // on met ce validator car il verifie les deux champs password et
        // le champs confirm password, si non on pourrait le mettre dans
        //un tableau comme le password.
      }
    );
  }

  // la méthode pour vérifier si le mot de passe de confirmation
  // est le mme que le mot de passe saisie.
  passwordMatchValidator(form: FormGroup) {
    // if(form.get('password') !== null) {
    //   if(form.get('password').value) {

    // Le point d'interrogation permet de ne pas 
    // accéder à la valeur de 'value' si le password est 'null' 
    if (form.get('password')?.value === form.get('confirmPassword')?.value) {
      return null;
    } else {
      return { mismatch: true };
    }
  }

onSubmitForm (){

this.submitted = true;
console.log (this.signUpForm.value);
const username = this.signUpForm.value.username;
const password = this.signUpForm.value.password;
const confirmPassword = this.signUpForm.value.confirmPassword;



    this.router.navigateByUrl('/');
    this.authService
      .registerUser(username, password)
      .subscribe((responseApi) => {
        console.log(responseApi);
      });
  }
}