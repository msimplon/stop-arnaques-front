import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-page-new-article',
  templateUrl: './page-new-article.component.html',
  styleUrls: ['./page-new-article.component.css']
})
export class PageNewArticleComponent implements OnInit {
  newArticleForm!: FormGroup;
  public response: any;
  public categoriesItems: any;
  constructor(private fb: FormBuilder, private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {
    this.newArticleForm = this.fb.group({
      title: ['', Validators.required],
      subTitle: [, Validators.required],
      description: [, Validators.required],
      date: ['', Validators.required]
    })
  


  this.articleService.getAllArticles().subscribe((this.response)) ; {
      console.log(this.response);
      this.categoriesItems = this.response;
  }
    
  }

  onSubmitForm() {
    const newArticle = new Article(
      this.newArticleForm.value.title,
      this.newArticleForm.value.subTitle,
      this.newArticleForm.value.description,
      this.newArticleForm.value.date,
      { "id": 1, "name": "Conseils"}
    );

    this.articleService.createNewArticle (newArticle).subscribe(() => {
      console.log("L'article a été créé !!!");
      this.router.navigateByUrl('/my-articles');
    });

  }
}
