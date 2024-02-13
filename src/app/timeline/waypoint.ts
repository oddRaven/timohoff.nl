export interface IWaypoint {
    imageSrc: string;
    isBound: boolean;
    title: string;
}

export class Waypoint implements IWaypoint {
    imageSrc: string = '/assets/placeholder-square.jpg';
    isBound: boolean = true;
    title: string = '';

    public constructor(init? : Partial<Waypoint>) {
        Object.assign(this, init);
    }
}