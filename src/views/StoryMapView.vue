
<template>
  <div class="storymap-container">
    <h3>{{ title }} - StoryMap</h3>
    <div id="mapdiv" ref="mapDiv"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { mockNarratives, Narrative } from "@/mock/narrativeData";

declare global {
  interface Window {
    VCO: any;
  }
}

const route = useRoute();
const narratives = ref<Narrative[]>(mockNarratives);
const narrativeId = route.params.id as string;

const narrative = computed(() => {
  return narratives.value.find((narr) => narr.id === narrativeId);
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
          text: `<p>${event.description}</p><p>Date: ${event.date}</p>`
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

  new window.VCO.StoryMap('mapdiv', storyMapData);
}
</script>

<style scoped>
.storymap-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#mapdiv {
  flex-grow: 1;
  width: 100%;
}
</style>
