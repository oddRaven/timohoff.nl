import { IWaypoint } from './waypoint';
import { IExperience } from '../experience-overview/iexperience';
import { Article } from './article';

export class Experience implements IWaypoint, IExperience {
    id: number = 0;
    phaseIndex: number = 0;
    image_source: string = 'https://file.timohoff.nl/placeholder-square.jpg';
    is_bound: boolean = true;
    title: string = '';
    description: string = '';
    skills: string[] = [];
    location: string = '';
    color: string = '';
    article? : Article;

    public constructor(init? : Partial<Experience>) {
        Object.assign(this, init);
    }
}