import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { ITimeline, Timeline } from '../../models/timeline';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  //private apiTimelineUrl : string = 'http://localhost:80/api/timeline';
  private apiTimelineUrl : string = 'https://api.timohoff.nl/public/api/timeline';

  constructor(private httpClient : HttpClient) { }

  public get(id: number) : Promise<ITimeline> {
    let url = `${this.apiTimelineUrl}/${id}`;
    let options = {
      headers: new HttpHeaders({
        'Content-Language': $localize.locale as string
      })
    };

    return lastValueFrom(this.httpClient
      .get<ITimeline>(url, options));
  }
}