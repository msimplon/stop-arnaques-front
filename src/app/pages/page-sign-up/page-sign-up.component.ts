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

  constructor(private fb : FormBuilder, private authService: AuthentificationService) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8),Validators.required]],
      confirmPassword: ['', [Validators.required]]
//tableau dans un tableau, sert a dire que si le champ n'a pas été rempli et bien il n'est pas valide
//ca met en place des messages d'erreurs ou blocage du submit

// ng0nit () void ( de type retour): qui sert à dire qu'a la naissance d'un composant le ngOnit initialera le composant
    },
    {
      validator: this.passwordMatchValidator
    }
    );

  }
  passwordMatchValidator(form: FormGroup) {

    // if(form.get('password') !== null) {
    //   if(form.get('password').value) {

    //   }
    // }
    // => résumé en form.get('password')?.value
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

//je transfère la valeur de mes champs username et password dans deux constantes pour plus de facilités de manipulation 
// je déclare et j'initiliase le signForm

this.authService.registerUser(username, password).subscribe ((reponseAPI) => {
console.log(reponseAPI);
})

  /**
       * fetch("http://url").then((resp) => {
       *  return resp.json()
       * }).then((responseApi) => {
       *  console.log(responseApi);
       * })
       */
}

}

