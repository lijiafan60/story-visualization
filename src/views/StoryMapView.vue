<!-- @/views/StoryMapView -->
<template>
  <n-layout position="absolute">
    <n-layout-header bordered class="header">
      <n-flex justify="space-between">
        <n-button @click="goToNarrative(narrativeId)">返回</n-button>
        <n-h2 style="margin: 0">{{title}} - 故事地图</n-h2>
        <n-button @click="goToTimeline(narrativeId)">时间线可视化</n-button>
      </n-flex>
    </n-layout-header>
    <n-layout-content class="content">
      <div id="map" ref="mapDiv"></div>
    </n-layout-content>
  </n-layout>
  <n-modal v-model:show="showNoDataModal" preset="dialog" title="提示" content="没有符合条件的数据可以展示" positive-text="确定" @positive-click="handleNoDataConfirm" />
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Event } from "@/mock/types";
import { useNavigation } from '@/router/useNavigation';
import { NModal } from 'naive-ui';
import { useNarrativesStore } from '@/stores'
import { storeToRefs } from 'pinia'

declare global {
  interface Window {
    VCO: any;
  }
}

const route = useRoute();
const narrativesStore = useNarrativesStore();
const { narratives } = storeToRefs(narrativesStore);
const narrativeId = computed(() => route.params.id as string);
const { goToNarrative, goToTimeline } = useNavigation()

const showNoDataModal = ref(false);

const narrative = computed(() => {
  return narratives.value.find((nar) => nar.id === narrativeId.value);
});

const title = computed(() => narrative.value?.title || "");
const events = computed(() => narrative.value?.events || []);

const mapDiv = ref<HTMLElement | null>(null);

// 辅助函数：格式化日期
function formatDate(date: { year: string, month: string, day: string }): string {
  if (!date.year) return '';
  const year = parseInt(date.year);
  const month = date.month ? parseInt(date.month) : 1;
  const day = date.day ? parseInt(date.day) : 1;
  return new Date(year, month - 1, day).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// 验证事件数据
function isValidEvent(event: Event): boolean {
  return (
    event.location && event.location.lat != 0 && event.location.lng != 0 && event.location.name != ""
  );
}

const validEvents = computed(() => {
  return events.value.filter(isValidEvent).map((event) => {
    // 创建相关实体的HTML字符串
    const relatedEntitiesHtml = event.relatedEntities && event.relatedEntities.length > 0
      ? `<p><strong>相关实体：</strong> ${event.relatedEntities.join(', ')}</p>`
      : '';

    // 格式化日期字符串
    const startDate = formatDate(event.startDate);
    const endDate = event.endDate ? formatDate(event.endDate) : '';
    const dateString = endDate ? `${startDate} ~ ${endDate}` : startDate;

    return {
      type: 'slide',
      text: {
        headline: event.title,
        text: `
              <p>${event.description}</p>
              ${dateString ? `<p>日期: ${dateString}</p>` : ''}
              ${relatedEntitiesHtml}
        `
      },
      location: {
        lat: event.location!.lat,
        lon: event.location!.lng,
        zoom: 10
      },
      media: {
        url: event.media?.url || '',
        caption: event.media?.caption || '',
        credit: event.media?.credit || ''
      }
    };
  });
});

watch(validEvents, (newValidEvents) => {
  if (newValidEvents.length === 0) {
    showNoDataModal.value = true;
  }
}, { immediate: true });

const handleNoDataConfirm = () => {
  showNoDataModal.value = false;
  goToNarrative(narrativeId.value);
};

onMounted(async () => {
  await narrativesStore.fetchNarratives();
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
  if (!mapDiv.value || validEvents.value.length === 0) return;

  const storyMapData = {
    storymap: {
      language: 'zh-cn',
      map_type: 'stamen:toner-lite',
      map_as_image: false,
      slides: validEvents.value
    }
  };

  new window.VCO.StoryMap('map', storyMapData);
}

// 自动关闭弹窗并返回上一页
watch(showNoDataModal, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      showNoDataModal.value = false;
      goToNarrative(narrativeId.value);
    }, 3000); // 3秒后自动关闭并返回
  }
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
}

#map {
  width: 100%;
  height: 100%;
}
</style>
