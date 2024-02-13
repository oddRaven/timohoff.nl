import { IWaypoint } from './waypoint'

export interface Phase {
    color: string;
    title: string;
    waypoints: IWaypoint[];
}