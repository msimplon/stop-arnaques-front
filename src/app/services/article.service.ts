import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private urlApi: string;
  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:8080/articles';
  }

    createNewArticle (newArticle: Article) {

      return this.http.post(
        `${this.urlApi}/create`,
        newArticle, 
      )
    }

    getAllArticles(): Observable <Article[]> {

      return this.http.get<Article[]>(`${this.urlApi}`, 
      )
    }

    getArticleById(articleId: string): Observable < Article > {

        return this.http.get<Article>(`${this.urlApi}/${articleId}`,
        )
    }

    updateArticle(article: Article): Observable <any> {

      const body = {
        title: article.title,
        subtitle: article.subtitle,
        description: article.description,
        dateOfPublication: article.dateOfPublication
      }

      return this.http.put<any>(`${this.urlApi}/$/articleUpdate`,
        body,
      )
    }

    deleteArticle(articleId: string) {

      return this.http.delete(
        `${this.urlApi}/${articleId}`,
         
      )
    }

    




}


//     createNewArticle(newArticle: Article) {


//       return this.http.post(
//         `${this.urlApi}/api/article`,
//         newArticle,


//          
// }