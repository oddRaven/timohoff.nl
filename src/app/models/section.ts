import { Article } from "./article";
import { Profile } from "./profile";
import { Timeline } from "./timeline";

export interface ISection {
    id? : number;
    title : string;
    items? : ISectionItem[];
};

export class Section implements ISection {
    id? : number;
    title : string = '';
    items? : ISectionItem[] = [];
};

export interface ISectionItem {
    id? : number;
    article? : Article;
    profiles? : Profile[];
    timeline? : Timeline;
}