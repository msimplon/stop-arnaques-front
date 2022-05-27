import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.css']
})
export class PageAccueilComponent implements OnInit {
  public listArticles!: any[];


  constructor(private service : ArticleService) { }

  ngOnInit(): void {
    this.service.getAllArticles().subscribe((articles) => {
      this.listArticles = articles;
    })

}




// cors policie en rapport avec la sécurité. il existe une solution de contournement qui est une annotation. en faite notre 
// front tourne sur le serveur et c'est un porcessus indépendant de l'api et donc on a deux porcessus qui tourne en parralle car locaoste et live serveur et 
// la postman ne fait pas qlq chose que les navigateur font et donc le navigateur pâr mesure de secu va faire un appel au serveur pour savoir si il doit l'autoiser 
// a faire des requete il s'agit de requete pre flight. Donc avant d'appeler notre url il appelle notre serveur postman 
// et il lui demande si il est autoiser a le faire donc faut etre attentif
}