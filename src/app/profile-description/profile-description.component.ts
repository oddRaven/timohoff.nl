import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-profile-description',
  standalone: true,
  imports: [NgIf],
  templateUrl: './profile-description.component.html',
  styleUrl: './profile-description.component.scss',
  animations: [
    trigger('fade', [
      state('void', style({ height: 0 })),
      transition(':enter', [
        style({ height: 0 }),
        animate(400, style({ height: '*' }))
      ]),
      transition(':leave', [
        style({ height: '*' }),
        animate(400, style({ height: 0 }))
      ])
    ])
  ]
})
export class ProfileDescriptionComponent {
  description!: string;
  visible: boolean = true;
}
