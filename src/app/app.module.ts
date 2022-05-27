import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// app routing parametrer plusieurs Urls
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageConseilsComponent } from './pages/page-conseils/page-conseils.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageNewArticleComponent } from './pages/page-new-article/page-new-article.component';
import { PageMyArticlesComponent } from './pages/page-my-articles/page-my-articles.component';
import { PageUpdateArticleComponent } from './pages/page-update-article/page-update-article.component';
import { AuthInterceptor } from './auth.interceptor';

//importation de ReactiveFormsModule dans les meta du decorateur qui me permet 
//de provider le service FormBuilder que j'inject dans mon composant
@NgModule({
  declarations: [
    AppComponent,
    PageAccueilComponent,
    NavBarComponent,
    PageContactComponent,
    PageSignUpComponent,
    PageConseilsComponent,
    PageSignInComponent,
    PageMyArticlesComponent,
    PageNewArticleComponent,
    PageUpdateArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  //permet d'ajouter à nos formulaires, les directives formGroup et formControlName afin de controler un formulaire
  //depuis sa class component

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
