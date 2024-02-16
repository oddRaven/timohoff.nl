import { IWaypoint } from '../timeline/waypoint';
import { IExperience } from '../experience-overview/iexperience';

export class Experience implements IWaypoint, IExperience {
    imageSrc: string = '/assets/placeholder-square.jpg';
    isBound: boolean = true;
    title: string = '';
    description: string = '';
    skills: string[] = [];
    location: string = '';

    public constructor(init? : Partial<Experience>) {
        Object.assign(this, init);
    }
}