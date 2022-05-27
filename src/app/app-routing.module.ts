import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PageNewArticleComponent } from './pages/page-new-article/page-new-article.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageConseilsComponent } from './pages/page-conseils/page-conseils.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageMyArticlesComponent } from './pages/page-my-articles/page-my-articles.component';
import { PageUpdateArticleComponent } from './pages/page-update-article/page-update-article.component';


//tableau de routes
//ici on créer une url associée


const routes: Routes = [
  {path: '', component: PageAccueilComponent }, 
  {path: 'Conseils', component: PageConseilsComponent },
  {path :'contact', component:PageContactComponent},
  {path: 'sign-in', component: PageSignInComponent},
  {path: 'sign-up', component: PageSignUpComponent},
  {path: 'my-articles', canActivate:[AuthGuard] , component: PageNewArticleComponent},
  {path: 'new-article', canActivate: [AuthGuard], component:  PageMyArticlesComponent},
  {path: 'update-article/:id-article', canActivate: [AuthGuard], component: PageUpdateArticleComponent},

];

//auth gard est notre class de notre fichier auth gard.ts, toute facon tous les imports sont des class de nos fichiers

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
