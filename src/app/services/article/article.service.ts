import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Article } from '../../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiArticleUrl: string = `${environment.apiUrl}/article`;

  constructor(private httpClient: HttpClient) {}

  public get(id: number): Promise<Article> {
    const url = `${this.apiArticleUrl}/${id}`;
    const options = {
      headers: new HttpHeaders({
        'Content-Language': $localize.locale as string
      })
    };

    return lastValueFrom(this.httpClient.get<Article>(url, options));
  }
}
