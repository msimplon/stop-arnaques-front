import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-page-my-articles',
  templateUrl: './page-my-articles.component.html',
  styleUrls: ['./page-my-articles.component.css']
})
export class PageMyArticlesComponent implements OnInit {
  public listArticles!: Article[];

  constructor( private articleService: ArticleService ) { }

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe((resp) => {
      this.listArticles = resp;
    })
  }

  onClickDeleteArticle(articleId: number | undefined) {
    console.log(articleId);
    if (articleId) {
      this.articleService.deleteArticle(articleId).subscribe({
        next: (resp) => {
          // Todo 
          /**
           * Rechercher dans le tableau this.listCountries
           * l'objet country avec l'_id == countryId
           * et le supprimer pour que notre liste de pays
           * n'affiche plus le pays supprimé
           */

          // Version compacte
          this.listArticles = this.listArticles.filter(article => article.id !== articleId);

          // Version détaillée
          // const newArrayFiltered = this.listCountries.filter(country => country._id !==  countryId);
          // this.listCountries = newArrayFiltered;

          // Version plus détaillée 
          // const detailsNewArrayFiltered = this.listCountries.filter((country) => {
          //   if(country._id !==  countryId) {
          //     return country;
          //   } else return;
          // });
          // this.listCountries = detailsNewArrayFiltered;

        },
        error: (err) => { console.error(err) }
      })
    }
  }





}
