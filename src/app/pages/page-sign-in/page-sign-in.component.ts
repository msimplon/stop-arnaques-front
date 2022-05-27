import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.css']
})
export class PageSignInComponent implements OnInit {

  signInError = false;
  constructor(
    private authService: AuthentificationService,
    private router: Router
  ) { }

  onSubmitSignIn(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;

    this.authService.logUser(username, password).subscribe({
      //méthode a appeler en cas de succès
      next : (resp: any) => {

      //en cas de succes enregistrement du token dans le stockage 
        this.router.navigateByUrl('/');
      localStorage.setItem('token', resp.token);
      this.authService.messager.next(true);
      },
      error: (error: any) => {
        this.signInError = true;
      }
      //booléen : message en cas d'erreur de connexion
    })
  };

  redirectUser() {
    this.router.navigateByUrl('/sign-in');

  }

  ngOnInit(): void { }

}


//Suscrite car traitement asynchrnone donc attendre la réponse