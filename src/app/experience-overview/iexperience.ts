import { Article } from '../models/article';

export interface IExperience {
    id: number;
    description: string;
    location: string;
    skills: string[];
    article? : Article;
}