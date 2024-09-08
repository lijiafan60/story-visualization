// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomeVue from '@/views/HomeView.vue';
import NarrativeView from '@/views/NarrativeView.vue';
import NarrativeTimelineView from '@/views/TimelineView.vue';
import StoryMap from '@/views/StoryMapView.vue';

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
  },
  {
    path: '/narrative/:id/map',
    name: 'NarrativeMap',
    component: StoryMap
  }
  // Add more routes as needed  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;