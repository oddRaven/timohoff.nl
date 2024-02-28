import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { Experience } from '../../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  //private apiExperienceUrl : string = 'http://localhost:80/api/waypoint';
  private apiExperienceUrl : string = 'https://api.timohoff.nl/public/api/waypoint';

  constructor(private httpClient : HttpClient) { }

  public get(id: number) : Promise<Experience> {
    let url = `${this.apiExperienceUrl}/${id}`;
    let options = {
      headers: new HttpHeaders({
        'Content-Language': $localize.locale as string
      })
    };

    return lastValueFrom(this.httpClient
      .get<Experience>(url, options));
  }
}