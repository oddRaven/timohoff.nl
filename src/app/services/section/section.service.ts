import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ISection } from '../../models/section';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private apiSectionUrl : string = `${environment.apiUrl}/section`;

  constructor(private httpClient : HttpClient) { }

  public getAll() : Promise<ISection[]> {
    let options = {
      headers: new HttpHeaders({
        'Content-Language': $localize.locale as string
      })
    };

    return lastValueFrom(this.httpClient
      .get<ISection[]>(this.apiSectionUrl, options));
  }
}