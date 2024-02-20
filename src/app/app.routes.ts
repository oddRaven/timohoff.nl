import { Routes } from '@angular/router';

import { ExperienceComponent } from './experience/experience.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'experience/:id',
        component: ExperienceComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
