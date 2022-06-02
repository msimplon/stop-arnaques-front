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
    this.urlApi = 'http://localhost:8080';
  }

    createNewArticle (newArticle: Article) {
      const token = localStorage.getItem("token");

      return this.http.post(
        `${this.urlApi}/articles`,
        newArticle, 
        { headers: { Authorization: `Bearer ${token}` } }

      )
    }

    getAllArticles(): Observable <Article[]> {
      const token = localStorage.getItem("token");

      return this.http.get<Article[]>(`${this.urlApi}/articles/list-articles`

      )
    }

    getArticleById(articleId: string): Observable < Article > {
      const token = localStorage.getItem("token");

        return this.http.get<Article>(`${this.urlApi}/articles/${articleId}`,
          { headers: { Authorization: `Bearer ${token}` } }

        )
    }

    updateArticle(article: Article): Observable <any> {
      const token = localStorage.getItem("token");

      const body = {
        title: article.title,
        subtitle: article.subTitle,
        description: article.description,
        date: article.date
      }

      return this.http.put<any>(`${this.urlApi}/articles/${article.id}`,
        body,
        { headers: { Authorization: `Bearer ${token}` } }
      )
    }

    deleteArticle(articleId: number) {
      const token = localStorage.getItem("token");

      return this.http.delete(
        `${this.urlApi}/articles/byId/${articleId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
         
    }
    }

    



//     createNewArticle(newArticle: Article) {


//       return this.http.post(
//         `${this.urlApi}/api/article`,
//         newArticle,


//          
// }