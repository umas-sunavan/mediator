import { Injectable } from '@angular/core';

export interface Events {
    title:string;
    agencies:string[];
    tagCount:number;
    lastUpdate:string;
}
export interface News {
    title:string;
    agency:string;
    topicType:string;
    lastUpdate:string;
}