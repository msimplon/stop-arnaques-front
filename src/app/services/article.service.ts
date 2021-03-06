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
      const body = {
        "title": newArticle.title,
        "subTitle": newArticle.subTitle,
        "date": newArticle.date,
        "description": newArticle.description,
        "categoryId": +newArticle.category
      }
      return this.http.post(
        `${this.urlApi}/articles`,
        body, 
        { headers: { Authorization: `Bearer ${token}` } }

      )
    }

    getAllArticles(): Observable <Article[]> {
      const token = localStorage.getItem("token");

      return this.http.get<Article[]>(`${this.urlApi}/articles/list-articles`

      )
    }

  getAllCategories() {
    const token = localStorage.getItem("token");
    return this.http.get(`${this.urlApi}/categories`
      , { headers: { Authorization: `Bearer ${token}` } }
    )
  }

    getArticleById(articleId: string): Observable < Article > {
      const token = localStorage.getItem("token");

        return this.http.get<Article>(`${this.urlApi}/articles/article-view/${articleId}`,
          { headers: { Authorization: `Bearer ${token}` } }

        )
    }

    updateArticle(article: Article): Observable <any> {
      const token = localStorage.getItem("token");

      const body = {
        "title": article.title,
        "subTitle": article.subTitle,
        "date": article.date,
        "description": article.description,
        "categoryId": article.category,
        "id": article.id
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

    
