// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';  
import HomeVue from '@/views/Home.vue';
import NarrativeView from '@/views/Narrative.vue';
import NarrativeTimelineView from '@/views/Timeline.vue'; // 新增导入

const routes = [  
  {
    path: '/',
    name: 'Home',
    component: HomeVue
  },
  {  
    path: '/narrative/:id',  
    name: 'Narrative',  
    component: NarrativeView  
  },  
  {  
    path: '/narrative/:id/timeline',
    name: 'NarrativeTimeline',  
    component: NarrativeTimelineView  
  }  
  // Add more routes as needed  
];  

const router = createRouter({  
  history: createWebHistory(),  
  routes  
});  

export default router;