import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private urlApi: string;
  public messager = new Subject<boolean>();
  public newsletter = new Subject<string>();

  //message subject déclarer qui est un observable, il va transporter un message qui est dans ntre propirité public 
  //et qu'on puisse y accaderr dans les autres composant et cette propéiété contient une nvl instance d'un nouveau subject
   //et grace a ce suject qui est de type booléen : en avertissant lorsqu'un utilisateur se connecte ou déconnecte


   // pr le second subject il sera de type string 
   //la nav bar se connect à la newstetter 
   // on affiche une petite alerte avec le textnewsteller 

  constructor(private http: HttpClient) { 
    this.urlApi = 'http://localhost:8080';
  }
  public registerUser(username: string, password: string){
    const body = {
      "username": username,
      "password": password,
     
    };
    return this.http.post(`${this.urlApi}/users`, body);
  }
  public logUser(username: string, password: string) {
    const body = {
      "username": username,
      "password": password,
    };
    return this.http.post(`${this.urlApi}/users/sign-in`, body);
  }


  }
//si y'a pas body sur la requete ya rien et un message d'erreur sera afficher

