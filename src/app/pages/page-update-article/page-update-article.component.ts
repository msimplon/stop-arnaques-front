import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-page-update-article',
  templateUrl: './page-update-article.component.html',
  styleUrls: ['./page-update-article.component.css']
})
export class PageUpdateArticleComponent implements OnInit {
  updateArticleForm!: FormGroup;
  public categoriesItems!: any;
  public items: any;
  public name: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    // Récupération de l'id passée dans l'url 
    this.activatedRoute.params.subscribe((param) => {
      console.log(param);
      

      // on fait appel à la méthode getArticleById de notre service 
      // pour récupérer l'objet Article que je veux modifier 
      this.articleService.getArticleById(param['id-article']).subscribe((article: Article) => {
       
        this.updateArticleForm = this.fb.group({
          title: [article.title, Validators.required],
          subtitle: [article.subTitle, Validators.required],
          description: [article.description, Validators.required],
          date: [article.date, Validators.required],
          id: [article.id]
        })
      })
    })
  }

  onSubmitForm() {
    const articleToUpdate = this.updateArticleForm.value;
// Rediriger le user vers la page "/my-articles"
    this.articleService.updateArticle(articleToUpdate).subscribe((resp) => {
      this.router.navigateByUrl('/my-articles');
    })
  }


}