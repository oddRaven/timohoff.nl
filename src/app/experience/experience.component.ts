import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Experience } from '../models/experience';
import { ExperienceService } from '../services/experience/experience.service';
import { ExperienceOverviewComponent } from '../experience-overview/experience-overview.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ ExperienceOverviewComponent, RouterLink ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  public experience?: Experience = undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private experienceService: ExperienceService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    if(this.document.defaultView!.innerWidth > 500)
    {
      this.router.navigate(['']);
    }

    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = Number(routeParams.get('id'));

    this.experienceService
      .get(id)
      .then((experience: Experience) => this.experience = experience);
  }
}
