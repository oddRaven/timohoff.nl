import { Waypoint } from './waypoint'

export interface Phase {
    color: string;
    title: string;
    waypoints: Waypoint[];
}