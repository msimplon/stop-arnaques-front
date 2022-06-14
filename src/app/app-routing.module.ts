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



const routes: Routes = [
  {path: '', component: PageAccueilComponent }, 
  {path: 'Conseils', component: PageConseilsComponent },
  {path :'contact', component:PageContactComponent},
  {path: 'sign-in', component: PageSignInComponent},
  {path: 'sign-up', component: PageSignUpComponent},
  { path: 'my-articles', canActivate: [AuthGuard], component: PageMyArticlesComponent},
  { path: 'new-article', canActivate: [AuthGuard], component: PageNewArticleComponent },
  {path: 'update-article/:id-article', canActivate: [AuthGuard], component: PageUpdateArticleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
