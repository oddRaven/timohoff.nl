import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ISection } from '../models/section';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() sections: ISection[] = [];
}
