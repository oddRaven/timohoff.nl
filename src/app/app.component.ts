import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { SkillsComponent } from './skills/skills.component';
import { PassionsComponent } from './passions/passions.component';
import { WebsiteComponent } from './website/website.component';
import { NoteDirective } from './note/note.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, AboutComponent, TeamComponent, SkillsComponent, PassionsComponent, WebsiteComponent, NoteDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'timohoff.nl';
}
