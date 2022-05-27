import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private router : Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      const token = localStorage.getItem ('token');
      if (token !==null) {

       const decodeToken: {userId: string, iat: number, exp: number} = jwtDecode(token);
       const expirationDate = new Date(decodeToken.exp * 1000);
       const currentDate = new Date();

       if(expirationDate<currentDate){
         //token supprimé
         //1. supprimer le token du local storage
         //2. Rediriger mon utilisateur vers sign in 
         //3 retourner false 
         localStorage.removeItem ('token');
         this.router.navigateByUrl('/sign-in');
         return false;
    
  } else {
    return true;

  }

    //instruction qui dit qu'il faut redigerer l'utilisateur à la page connexion 
    // router est une classe, navigateByUrl est une méthode
  } else {
    this.router.navigateByUrl('/sign-in');
    return false;  
  }
  }

  //gard est un paramétrage de route en interne

}


