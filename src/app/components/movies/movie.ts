import { Time } from "@angular/common";

export interface IMovie {
    id: number;
    title: string;
    coverUrl: string;
    year: number;
    genres?: IGenre[];
    duration?: string;
};

export interface IGenre {
    id: number;
    name: string
};