export interface ISection {
    id? : number;
    title : string;
};

export class Section implements ISection {
    id? : number;
    title : string = '';
};