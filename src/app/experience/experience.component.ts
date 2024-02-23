import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Experience } from '../models/experience';
import { ExperiencesService } from '../services/experiences/experiences.service';
import { ExperienceOverviewComponent } from '../experience-overview/experience-overview.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ ExperienceOverviewComponent, RouterLink ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  public experience: Experience;

  constructor(
    private activatedRoute: ActivatedRoute,
    private experiencesService: ExperiencesService,
    private router: Router
  ) {
    if(window.innerWidth > 500)
    {
      this.router.navigate(['']);
    }

    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = Number(routeParams.get('id'));

    this.experience = this.experiencesService.get(id) as Experience;
  }

  ngOnInit(): void {
  }
}
