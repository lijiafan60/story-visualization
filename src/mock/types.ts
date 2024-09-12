// src/mock/types.ts

export enum EntityTypesEnum {
  Person = "PERSON",
  Location = "LOCATION",
  Organization = "ORGANIZATION",
  Event = "EVENT",
  Date = "DATE",
  Time = "TIME",
  Document = "DOCUMENT",
  Concept = "CONCEPT",
  Object = "OBJECT",
  Work = "WORK",
  Other = "OTHER"
}

export const entityTypes: EntityTypesEnum[] = Object.values(EntityTypesEnum);

export interface Entity {
  id: string;
  name: string;
  type: EntityTypesEnum;
}

export interface Location {  
    name: string;  
    lat: number;  
    lng: number;  
}

export interface Media {
    url: string,       // url for featured media
    caption: string,   // optional; brief explanation of media content
    credit: string     // optional; creator of media content
}

export interface Event {  
    id: string;  
    title: string;
    type: string;
    startDate: number;
    endDate: number;
    location: Location;
    media: Media;
    description: string;
    relatedEntities: string[];
}

export interface Narrative {
    id: string;  
    title: string;  
    description: string;
    imageUrl: string;
    events: Event[];  
    entities: Entity[];  
}