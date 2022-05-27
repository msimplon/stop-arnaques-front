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

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    // Récupération de l'id passée dans l'url 
    this.activatedRoute.params.subscribe((param) => {
      console.log(param);
      // on fait appel à la méthode getCountryById de notre service 
      // pour récupérer l'objet Country que l'on veut modifier 
      this.articleService.getArticleById(param['id-article']).subscribe((article: Article) => {
       
        this.updateArticleForm = this.fb.group({
          title: [article.title, Validators.required],
          subtitle: [article.subtitle, Validators.required],
          description: [article.description, Validators.required],
          dateOfPublication: [article.dateOfPublication, Validators.required],
          _id: [article.id]
        })
      })
    })
  }

  onSubmitForm() {
    const articleToUpdate = this.updateArticleForm.value;

    this.articleService.updateArticle(articleToUpdate).subscribe((resp) => {
      //alert(resp.message);
      // TODO Rediriger le user vers la page "/my-countries"
      this.router.navigateByUrl('/create');
    })
  }


}