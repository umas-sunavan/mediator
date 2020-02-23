import { Injectable } from '@angular/core';

export interface Event {
    id:number;
    title:string;
    agencies:string[];
    tagCount:number;
    lastUpdate:string;
}
export interface News {
    id:number
    title:string;
    agency:string;
    topicType:string;
    lastUpdate:string;
}
export interface Cite {
    spokesman:string,
    statements:string[]
}
export interface Reference {
    type:string,
    context:string[],
}
export interface NewsSection {
    sectionType: string,
    context: string[],
    references: Reference[],
}
export interface EventNews {
    id:number,
    agency: string,
    journalist: string,
    newsSections: NewsSection[],
    cites: Cite[]
}
