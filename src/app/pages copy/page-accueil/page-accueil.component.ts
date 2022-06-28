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


}