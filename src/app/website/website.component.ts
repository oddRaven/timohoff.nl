import { Component } from '@angular/core';

import { ApproachComponent } from '../approach/approach.component';
import { RequirementsComponent } from '../requirements/requirements.component';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [ApproachComponent, RequirementsComponent],
  templateUrl: './website.component.html',
  styleUrl: './website.component.scss'
})
export class WebsiteComponent {
}