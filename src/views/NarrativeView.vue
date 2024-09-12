<!-- @/views/NarrativeView -->
<template>
  <n-layout position="absolute">
    <n-layout-header bordered class="header">
      <n-flex justify="space-between">
        <n-button @click="goToHome">主页</n-button>
        <n-h2 style="margin: 0">{{title}}</n-h2>
        <div/>
      </n-flex>
    </n-layout-header>

    <n-layout-content class="content">
      <n-split class="main-split" direction="vertical" :default-size="splitSizes">
        <template #1>
          <div class="main-content">
            <n-split direction="horizontal">
              <template #1>
                <div class="left-panel">
                  <entity-list :entities="narrative.entities" @update:entities="updateEntities" />
                </div>
              </template>
              <template #2>
                <div class="right-panel">
                  <event-form
                    :event="selectedEvent"
                    :entities="entities"
                    @save="saveEvent"
                  />
                </div>
              </template>
            </n-split>
          </div>
        </template>
        <template #2>
          <n-space vertical style="margin: 10px">
            <n-space>
              <n-button @click="goToTimeline(narrativeId)" secondary round>Visual Timeline</n-button>
              <n-button @click="goToStoryMap(narrativeId)" secondary round>Visual Map</n-button>
            </n-space>
            <event-carousel :events="events" @select-event="selectEvent" />
          </n-space>
        </template>
      </n-split>
    </n-layout-content>
  </n-layout>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { Narrative, Event } from "@/mock/types";
import { mockNarratives } from '@/mock/narratives'
import { useNavigation } from '@/router/useNavigation';
import EntityList from "@/components/EntityList.vue";
import EventForm from "@/components/EventForm.vue";
import EventCarousel from "@/components/EventCarousel.vue";

const route = useRoute()

const narratives = ref<Narrative[]>(mockNarratives);
const narrativeId = computed(() => route.params.id as string);
const { goToHome, goToStoryMap, goToTimeline } = useNavigation()

const narrative = computed(() => {
  return narratives.value.find((nar) => nar.id === narrativeId.value);
});

const selectedEvent = ref<Event | null>(null);
const splitSizes = ref<number>(0.7);

const title = computed(() => narrative.value?.title || "");
const entities = computed(() => narrative.value?.entities || []);
const events = computed(() => narrative.value?.events || []);

const selectEvent = (event: Event) => {
  selectedEvent.value = event;
};

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

.main-split {
  flex-grow: 1;
  height: calc(100% - 50px);
}

.main-content {
  height: 100%;
}

.left-panel,
.right-panel {
  height: 100%;
  padding: 10px;
}
</style>
