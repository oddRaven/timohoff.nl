import { Article } from "./article";
import { Profile } from "./profile";

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
}