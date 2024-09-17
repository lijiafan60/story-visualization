<!-- @/views/TimelineView -->
<template>
  <n-layout position="absolute">
    <n-layout-header bordered class="header">
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
  <n-modal v-model:show="showNoDataModal" preset="dialog" title="提示" content="没有符合条件的数据可以展示" positive-text="确定" @positive-click="handleNoDataConfirm" />
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Event } from '@/mock/types'
import { useNavigation } from '@/router/useNavigation'
import { NModal } from 'naive-ui'
import { useNarrativesStore } from '@/stores'
import { storeToRefs } from 'pinia'

const route = useRoute();
const narrativesStore = useNarrativesStore();
const { narratives } = storeToRefs(narrativesStore);
const narrativeId = computed(() => route.params.id as string);
const { goToNarrative, goToStoryMap } = useNavigation()

const showNoDataModal = ref(false);

const narrative = computed(() => {
  return narratives.value.find((nar) => nar.id === narrativeId.value);
});

const title = computed(() => narrative.value?.title || "");
const events = computed(() => narrative.value?.events || []);

const loadTimelineJS = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css';
  document.head.appendChild(link);

  const script = document.createElement('script');
  script.src = 'https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js';
  document.body.appendChild(script);
};

const isValidDate = (date: { year: string, month: string, day: string }) => {
  return date.year && date.year.trim() !== '';
};

const convertEventToTimelineFormat = (event: Event) => {
  if (!isValidDate(event.startDate)) {
    return null;
  }

  return {
    start_date: {
      year: parseInt(event.startDate.year),
      month: event.startDate.month ? parseInt(event.startDate.month) : undefined,
      day: event.startDate.day ? parseInt(event.startDate.day) : undefined
    },
    end_date: event.endDate && isValidDate(event.endDate) ? {
      year: parseInt(event.endDate.year),
      month: event.endDate.month ? parseInt(event.endDate.month) : undefined,
      day: event.endDate.day ? parseInt(event.endDate.day) : undefined
    } : undefined,
    text: {
      headline: event.title,
      text: `<p>${event.description}</p>`
    },
    media: event.media && event.media.url ? {
      url: event.media.url,
      caption: event.media.caption,
      credit: event.media.credit
    } : undefined,
    group: event.type,
  };
};

const timelineData = computed(() => {
  const validEvents = events.value
    .map(convertEventToTimelineFormat)
    .filter(event => event !== null);

  if (validEvents.length === 0) {
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    showNoDataModal.value = true;
    return null;
  }

  return {
    title: {
      text: {
        headline: title.value,
        text: narrative.value?.description || '',
      }
    },
    events: validEvents
  };
});

const handleNoDataConfirm = () => {
  showNoDataModal.value = false;
  goToNarrative(narrativeId.value);
};

onMounted(async () => {
  await narrativesStore.fetchNarratives();
  loadTimelineJS();
  const interval = setInterval(() => {
    if (window.TL) {
      clearInterval(interval);
      if (timelineData.value) {
        new window.TL.Timeline('timeline-embed', timelineData.value);
      }
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
  height: calc(100vh - 63px);
  padding-top: 63px;
  overflow: hidden;
}

#timeline-embed {
  width: 100%;
  height: 100%;
  margin: 0;
}

:deep(.tl-timeline) {
  height: 100% !important;
}
</style>
