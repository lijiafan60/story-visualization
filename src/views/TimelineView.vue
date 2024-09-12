<template>
  <n-layout position="absolute">
    <n-layout-header  bordered class="header">
      <n-flex justify="space-between">
        <n-button @click="goToNarrative(narrativeId)">返回</n-button>
        <n-h2 style="margin: 0">{{title}} -- 时间线</n-h2>
        <n-button @click="goToStoryMap(narrativeId)">地图可视化</n-button>
      </n-flex>
    </n-layout-header>
    <n-layout-content class="content">
      <div id="timeline-embed"></div>
    </n-layout-content>
  </n-layout>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Narrative, Event } from '@/mock/types'
import { mockNarratives } from '@/mock/narratives'
import { useNavigation } from '@/router/useNavigation'

const route = useRoute();
const narratives = ref<Narrative[]>(mockNarratives);
const narrativeId = computed(() => route.params.id as string);
const {goToNarrative, goToStoryMap} = useNavigation()

const narrative = computed(() => {
  return narratives.value.find((nar) => nar.id === narrativeId.value);
});

const title = computed(() => narrative.value?.title || "");
const events = computed(() => narrative.value?.events || []);

// 引入TimelineJS的CSS和JS  
const loadTimelineJS = () => {  
  const link = document.createElement('link');  
  link.rel = 'stylesheet';  
  link.href = 'https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css';  
  document.head.appendChild(link);  

  const script = document.createElement('script');  
  script.src = 'https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js';  
  document.body.appendChild(script);  
};

// 转换事件数据为TimelineJS格式
const convertEventToTimelineFormat = (event: Event) => {
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);

  return {
    start_date: {
      year: startDate.getFullYear().toString(),
      month: (startDate.getMonth() + 1).toString(),
      day: startDate.getDate().toString()
    },
    end_date: event.endDate ? {
      year: endDate.getFullYear().toString(),
      month: (endDate.getMonth() + 1).toString(),
      day: endDate.getDate().toString()
    } : undefined,
    text: {
      headline: event.title,
      text: `<p>${event.description}</p>`
    },
    group: event.type,
  };
};


const timelineData = computed(() => {
  const data = {
    title: {
      text: {
        headline: title.value,
        text: narrative.value?.description || '',
      }
    },
    events: events.value.map(convertEventToTimelineFormat)
  };
  console.log('Timeline Data:', data);
  return data;
});


onMounted(() => {  
  loadTimelineJS();  
  const interval = setInterval(() => {  
    if (window.TL) {  
      clearInterval(interval);  
      new window.TL.Timeline('timeline-embed', timelineData.value);
    }  
  }, 100);  
});  
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

#timeline-embed {
  width: 100%;
  height: 93vh;
  margin: 20px 0;
}
</style>