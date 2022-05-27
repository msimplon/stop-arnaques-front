import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public isAuthentificated = false;

  constructor(private authService: AuthentificationService, private router: Router) { }
//injection du composant service dans le constructeur 
  ngOnInit(): void {
   const token= localStorage.getItem('token')
   if (token !== null || token !=='') {
     this.isAuthentificated = true;
   }
// ON SE SERT DE CE SERVICE PUR RECUPERER LE MESSAGE ET SOUSCRIRE A CE MESSAGER 
// LE MESSAGSER TRANSPORT UN MESSAGE avertissant lorsq'un utilisateur se connecte ou déconnecte 
//ce message est un bouléen 
// On enregirtsre le token si bon mtp et bon mail. 
// on se sert du message rpiur avertir la navbar que l'utilisateur s'est bien co
//donc booléen true 

    this.authService.messager.subscribe((message: boolean) => {
      this.isAuthentificated = message;
    })
//subscribe est un observable 
// on type le bouléen car il est transporté par le subject
  
    this.authService.newsletter.subscribe((textNewsletter: string) => {
      //on utilise next pour dire à la nav bar qu'on s'est bien co
      //donc on a communication entre 2 composants : page sign -in en passant par le messager su service vers la nav bar
    
    
  })

}

onClickLogout() {
  localStorage.removeItem ('token');
  this.isAuthentificated = false;
  this.router.navigateByUrl('/sign-in');


// 

}


}