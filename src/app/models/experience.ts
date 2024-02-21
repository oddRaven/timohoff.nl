import { IWaypoint } from '../timeline/waypoint';
import { IExperience } from '../experience-overview/iexperience';

export class Experience implements IWaypoint, IExperience {
    id: number = 0;
    phaseIndex: number = 0;
    imageSrc: string = '/assets/placeholder-square.jpg';
    isBound: boolean = true;
    title: string = '';
    description: string = '';
    skills: string[] = [];
    location: string = '';
    color: string = '';

    public constructor(init? : Partial<Experience>) {
        Object.assign(this, init);
    }
}