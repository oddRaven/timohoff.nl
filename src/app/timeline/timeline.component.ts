import { Component, Input, Output, EventEmitter, ElementRef, AfterViewInit, PLATFORM_ID, Inject, signal } from '@angular/core';
import { NgClass, isPlatformServer } from '@angular/common';

import { Timeline } from '../models/timeline';
import { IWaypoint } from '../models/waypoint';
import { Article } from '../models/article';
import { ArticleComponent } from '../article/article.component';
import { ArticleService } from '../services/article/article.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgClass, ArticleComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements AfterViewInit {
  @Input() timeline!: Timeline;
  @Output() selectWaypoint = new EventEmitter<IWaypoint>();

  selectorLeft = -150;
  selectedArticle = signal<Article | undefined>(undefined);
  private selectedArticleRequestId = 0;

  constructor (
    private elementRef: ElementRef,
    private articleService: ArticleService,
    @Inject(PLATFORM_ID) private platformId: Object)
  {
  }

  ngAfterViewInit(): void {
    if (isPlatformServer(this.platformId)) {
      return;
    }

    window.setTimeout(() => this.showCurrent());
  }

  public select (waypoint: IWaypoint){
    this.selectWaypoint.emit(waypoint);

    let index = 0;
    loop: for (let phase of this.timeline.phases){
      for (let phaseWaypoint of phase.waypoints){
        if(waypoint == phaseWaypoint){
          break loop;
        }

        index++;
      }
    }

    this.selectorLeft = 8 + index * 130;

    if (waypoint.article_id == null) {
      this.selectedArticleRequestId++;
      this.selectedArticle.set(undefined);
      return;
    }

    const requestId = ++this.selectedArticleRequestId;

    this.articleService
      .get(waypoint.article_id)
      .then((article) => {
        if (requestId === this.selectedArticleRequestId) {
          this.selectedArticle.set(article);
        }
      })
      .catch(() => {
        if (requestId === this.selectedArticleRequestId) {
          this.selectedArticle.set(undefined);
        }
      });
  }

  private showCurrent() {
    let element = this.elementRef.nativeElement;
    element.scroll(element.scrollWidth, element.scrollHeight);
    element.classList.add('visible');
  }
}