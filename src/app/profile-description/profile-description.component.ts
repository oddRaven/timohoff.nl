import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-description',
  standalone: true,
  templateUrl: './profile-description.component.html',
  styleUrl: './profile-description.component.scss'
})
export class ProfileDescriptionComponent {
  description!: string;
  visible: boolean = true;
}
