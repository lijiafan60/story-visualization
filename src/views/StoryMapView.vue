
<template>
  <n-layout position="absolute">
    <n-layout-header  bordered class="header">
      <n-flex justify="space-between">
        <n-button @click="goToNarrative(narrativeId)">BACK</n-button>
        <n-h2 style="margin: 0">{{title}} - Story Map</n-h2>
        <n-button @click="goToTimeline(narrativeId)">Visual TimeLine</n-button>
      </n-flex>
    </n-layout-header>
    <n-layout-content class="content">
      <div id="map" ref="mapDiv"></div>
    </n-layout-content>
  </n-layout>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { mockNarratives, Narrative } from "@/mock/narrativeData";
import {useNavigation} from '@/router/useNavigation';

declare global {
  interface Window {
    VCO: any;
  }
}

const route = useRoute();
const narratives = ref<Narrative[]>(mockNarratives);
const narrativeId = computed(() => route.params.id as string);
const { goToNarrative, goToTimeline } = useNavigation()

const narrative = computed(() => {
  return narratives.value.find((nar) => nar.id === narrativeId.value);
});

const title = computed(() => narrative.value?.title || "");
const events = computed(() => narrative.value?.events || []);

const mapDiv = ref<HTMLElement | null>(null);

onMounted(() => {
  // Ensure StoryMapJS is loaded
  if (typeof window.VCO === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdn.knightlab.com/libs/storymapjs/latest/js/storymap-min.js';
    script.onload = initStoryMap;
    document.head.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.knightlab.com/libs/storymapjs/latest/css/storymap.css';
    document.head.appendChild(link);
  } else {
    initStoryMap();
  }
});

function initStoryMap() {
  if (!mapDiv.value) return;

  const storyMapData = {
    storymap: {
      language: 'en',
      map_type: 'stamen:toner-lite',
      map_as_image: false,
      slides: events.value.map((event, index) => ({
        type: 'slide',
        text: {
          headline: event.title,
          text: `<p>${event.description}</p><p>Date: ${event.startDate} ~ ${event.endDate}</p>`
        },
        location: {
          lat: event.location?.lat,
          lon: event.location?.lng,
          zoom: 10
        },
        media: {
          url: event.media?.url || '',
          caption: event.media?.caption || '',
          credit: event.media?.credit || ''
        }
      }))
    }
  };

  new window.VCO.StoryMap('map', storyMapData);
}
</script>

<style scoped>
.header {
  height: 63px;
  padding: 16px 24px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease;
}

.header:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.content {
  height: 100%;
  padding-top: 63px;
}

#map {
  flex-grow: 1; /* 让地图填满剩余空间 */
  width: 100%;
}
</style>
