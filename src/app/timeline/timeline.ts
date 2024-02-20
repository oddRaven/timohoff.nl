import { Phase } from './phase'

export interface ITimeline {
    phases: Phase[];
}

export class Timeline implements ITimeline {
    phases: Phase[] = [];
}