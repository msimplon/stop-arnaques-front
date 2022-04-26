import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageConseilsComponent } from './page-conseils/page-conseils.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageSignInComponent } from './page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './page-sign-up/page-sign-up.component';

const routes: Routes = [
  { path: '', component: PageAccueilComponent },
  { path: 'Conseils', component: PageConseilsComponent },
  {path :'contact', component:PageContactComponent},
  {path: 'sign-in', component: PageSignInComponent},
  {path: 'sign-up', component: PageSignUpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
