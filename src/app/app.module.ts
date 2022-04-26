import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// app routing parametrer plusieurs Urls
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageSignInComponent } from './page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './page-sign-up/page-sign-up.component';
import { PageConseilsComponent } from './page-conseils/page-conseils.component';
import { ReactiveFormsModule } from '@angular/forms';

//importation de ReactiveFormsModule dans les meta du decorateur qui me permet de provider le service FormBuilder que j'inject dans mon composant
@NgModule({
  declarations: [
    AppComponent,
    PageAccueilComponent,
    NavBarComponent,
    PageContactComponent,
    PageSignInComponent,
    PageSignUpComponent,
    PageConseilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  //permet d'ajouter à nos formulaires, les directives formGroup et formControlName afin de controler un formulaire
  //depuis sa class component

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
