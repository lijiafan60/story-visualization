export interface NarrativeItem {  
  id: string  
  title: string  
  description: string  
  imageUrl: string  
}  

export const narratives: NarrativeItem[] = [  
  {  
    id: '1',  
    title: 'Sample Narrative',  
    description: "Sample Narrative",  
    imageUrl: "https://picsum.photos/300/200?random=1"  
  },  
  {  
    id: '2',  
    title: 'Tech Revolution Conference',  
    description: "An international conference discussing the advancements in technology.",   
    imageUrl: "https://picsum.photos/300/200?random=2"  
  },  
  {  
    id: '3',  
    title: "Historical Exploration Journey",  
    description: "A journey to rediscover the history of ancient civilizations.",  
    imageUrl: "https://picsum.photos/300/200?random=3"  
  },  
  {  
    id: '4',  
    title: "Global Economic Summit",  
    description: "A summit for global leaders to discuss economic strategies.",  
    imageUrl: "https://picsum.photos/300/200?random=4"  
  },  
];