// src/mock/narrativeData.ts  

export interface Location {  
    name: string;  
    lat: number;  
    lng: number;  
}  

export interface Event {  
    id: string;  
    title: string;
    type: string;
    startDate: number;
    endDate: number;
    location: Location;  
    description: string;  
    relatedEntities: string[];
}  

export interface Entity {  
    id: string;  
    name: string;  
    type: string;  
}  

export interface Narrative {  
    id: string;  
    title: string;  
    description: string;  
    events: Event[];  
    entities: Entity[];  
}  

export const mockEntity: Entity[] = [  
  { id: '1', name: 'John Doe', type: 'PEOPLE' },  
  { id: '2', name: 'Jane Smith', type: 'PEOPLE' },  
  { id: '3', name: 'Michael Johnson', type: 'PEOPLE' },  
  { id: '4', name: 'Emily Brown', type: 'PEOPLE' },  
  { id: '5', name: 'David Lee', type: 'PEOPLE' },  
  
  { id: '6', name: 'New York', type: 'PLACES' },  
  { id: '7', name: 'London', type: 'PLACES' },  
  { id: '8', name: 'Tokyo', type: 'PLACES' },  
  { id: '9', name: 'Paris', type: 'PLACES' },  
  { id: '10', name: 'Sydney', type: 'PLACES' },  
  
  { id: '11', name: 'Acme Corp', type: 'ORGS' },  
  { id: '12', name: 'Global Tech', type: 'ORGS' },  
  { id: '13', name: 'Green Energy Ltd', type: 'ORGS' },  
  { id: '14', name: 'United Nations', type: 'ORGS' },  
  { id: '15', name: 'Red Cross', type: 'ORGS' },  

  // Additional entities for other types  
  { id: '16', name: 'Laptop', type: 'OBJECTS' },  
  { id: '17', name: 'Smartphone', type: 'OBJECTS' },  
  { id: '18', name: 'Blockchain', type: 'CONCEPTS' },  
  { id: '19', name: 'Sustainable Development', type: 'CONCEPTS' },  
  { id: '20', name: 'Symphony No. 5', type: 'WORKS' },  
  { id: '21', name: 'The Great Biography', type: 'WORKS' },  
  { id: '22', name: 'Miscellaneous', type: 'OTHER' }  
];  

export const mockNarratives: Narrative[] = [  
  {  
    id: '1',  
    title: 'Sample Narrative',  
    description: "Sample Narrative",  
    entities: [/* entities here */],  
    events: [/* events here */]  
  },  
  {  
    id: '2',  
    title: 'Tech Revolution Conference',  
    description: "An international conference discussing the advancements in technology.",  
    entities: [  
      { id: '1', name: 'John Doe', type: 'PEOPLE' },  
      { id: '7', name: 'London', type: 'PLACES' },  
      { id: '12', name: 'Global Tech', type: 'ORGS' },  
      { id: '14', name: 'United Nations', type: 'ORGS' },  
      { id: '16', name: 'Laptop', type: 'OBJECTS' },  
      { id: '18', name: 'Blockchain', type: 'CONCEPTS' }  
    ],  
    events: [  
      {  
        id: "11",  
        title: "AI Panel Discussion",  
        startDate: 1696003200000,  
        endDate: 1696089600000,  
        location: {  
          name: "Tech Expo Center",  
          lat: 51.5074,  
          lng: 0.1278  
        },  
        description: "Experts delve into the latest trends in AI and machine learning.",  
        type: "conference",  
        relatedEntities: ["1", "12", "18"]  
      },  
      {  
        id: "12",  
        title: "Future of Robotics",  
        startDate: 1696608000000,  
        endDate: 1696694400000,  
        location: {  
          name: "Innovation Hall",  
          lat: 51.5007,  
          lng: 0.1246  
        },  
        description: "Unveiling the next-gen robotics technologies.",  
        type: "workshop",  
        relatedEntities: ["12", "1", "16"]  
      }  
    ]  
  },  
  {  
    id: '3',  
    title: "Historical Exploration Journey",  
    description: "A journey to rediscover the history of ancient civilizations.",  
    entities: [  
      { id: '4', name: 'Emily Brown', type: 'PEOPLE' },  
      { id: '8', name: 'Tokyo', type: 'PLACES' },  
      { id: '11', name: 'Acme Corp', type: 'ORGS' },  
      { id: '19', name: 'Sustainable Development', type: 'CONCEPTS' }  
    ],  
    events: [  
      {  
        id: "21",  
        title: "Ancient Artifacts Exhibition",  
        startDate: 1699008000000,  
        endDate: 1699094400000,  
        location: {  
          name: "National Museum of Tokyo",  
          lat: 35.6895,  
          lng: 139.6917  
        },  
        description: "Displaying rare artifacts from ancient times.",  
        type: "exhibition",  
        relatedEntities: ["4", "11", "19"]  
      },  
      {  
        id: "22",  
        title: "Cultural Heritage Seminar",  
        startDate: 1699507200000,  
        endDate: 1699593600000,  
        location: {  
          name: "Heritage Hall",  
          lat: 35.6894,  
          lng: 139.692  
        },  
        description: "Discussing the preservation of cultural sites.",  
        type: "seminar",  
        relatedEntities: ["4", "8", "19"]  
      }  
    ]  
  },  
  {  
    id: '4',  
    title: "Global Economic Summit",  
    description: "A summit for global leaders to discuss economic strategies.",  
    entities: [  
      { id: '3', name: 'Michael Johnson', type: 'PEOPLE' },  
      { id: '9', name: 'Paris', type: 'PLACES' },  
      { id: '14', name: 'United Nations', type: 'ORGS' },  
      { id: '21', name: 'The Great Biography', type: 'WORKS' },  
      { id: '22', name: 'Miscellaneous', type: 'OTHER' }  
    ],  
    events: [  
      {  
        id: "31",  
        title: "Finance Leaders' Meeting",  
        startDate: 1701523200000,  
        endDate: 1701609600000,  
        location: {  
          name: "UN Headquarters",  
          lat: 48.8566,  
          lng: 2.3522  
        },  
        description: "Top finance leaders discuss international economic policies.",  
        type: "meeting",  
        relatedEntities: ["3", "14", "22"]  
      },  
      {  
        id: "32",  
        title: "Global Trade Expo",  
        startDate: 1702022400000,  
        endDate: 1702108800000,  
        location: {  
          name: "Expo Center Paris",  
          lat: 48.8588,  
          lng: 2.2947  
        },  
        description: "Showcasing international trade opportunities.",  
        type: "exhibition",  
        relatedEntities: ["9", "14", "21"]  
      }  
    ]  
  },  
  {  
    id: '5',  
    title: "Objects in Technology",  
    description: "The impact of everyday objects in technological advancements.",  
    entities: [  
      { id: '2', name: 'Jane Smith', type: 'PEOPLE' },  
      { id: '17', name: 'Smartphone', type: 'OBJECTS' }  
    ],  
    events: [  
      {  
        id: "41",  
        title: "Digital Economy Forum",  
        startDate: 1703059200000, // 2024-01-20  
        endDate: 1703145600000, // 2024-01-21  
        location: {  
          name: "Global Conference Center",  
          lat: 40.7128,  
          lng: -74.0060  
        },  
        description: "Forum discussing the role of digital devices in the modern economy.",  
        type: "forum",  
        relatedEntities: ["2", "17"]  
      }  
    ]  
  }  
];