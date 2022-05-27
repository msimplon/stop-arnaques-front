import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-page-conseils',
  templateUrl: './page-conseils.component.html',
  styleUrls: ['./page-conseils.component.css']
})
export class PageConseilsComponent implements OnInit {
  public listArticles!: any[];

  constructor(private service: ArticleService) { }

  ngOnInit(): void {
    this.service.getAllArticles().subscribe((articles) => {
      this.listArticles = articles;
    })

  
  }
}