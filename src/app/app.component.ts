import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { TeamComponent } from './team/team.component';
import { SkillsComponent } from './skills/skills.component';
import { PassionsComponent } from './passions/passions.component';
import { WebsiteComponent } from './website/website.component';
import { NoteComponent } from './note/note.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, TeamComponent, SkillsComponent, PassionsComponent, WebsiteComponent, NoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'timohoff.nl';
}
