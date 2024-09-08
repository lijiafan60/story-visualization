<!-- @/views/NarrativeView -->
<template>
  <div class="narrative-detail-container">
    <div class="narrative-title">
      <h3>{{ title }}</h3>
    </div>
    <n-float-button @click="goBack">
      <n-icon size="30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
        >
          <path
            d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z"
            fill="currentColor"
          ></path>
          <path
            d="M490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"
            fill="currentColor"
          ></path>
        </svg>
      </n-icon>
    </n-float-button>
    <n-split class="main-split" direction="vertical" :default-size="splitSizes">
      <template #1>
        <div class="main-content">
          <n-split direction="horizontal">
            <template #1>
              <div class="left-panel">
                <entity-list :entities="entities" />
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
              <n-button @click="viewTimeline" secondary round>Visual as Timeline</n-button>
              <n-button @click="viewMap" secondary round>Visual as Map</n-button>
            </n-space>
          <event-carousel :events="events" @select-event="selectEvent" />
        </n-space>
      </template>
    </n-split>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { mockNarratives, Narrative, Event } from "@/mock/narrativeData";
import EntityList from "@/components/EntityList.vue";
import EventForm from "@/components/EventForm.vue";
import EventCarousel from "@/components/EventCarousel.vue";

const route = useRoute();
const router = useRouter();

const narratives = ref<Narrative[]>(mockNarratives);
const narrativeId = route.params.id as string;

const narrative = computed(() => {
  return narratives.value.find((narr) => narr.id === narrativeId);
});

const selectedEvent = ref<Event | null>(null);
const splitSizes = ref<number>(0.7);

const title = computed(() => narrative.value?.title || "");
const entities = computed(() => narrative.value?.entities || []);
const events = computed(() => narrative.value?.events || []);

const viewTimeline = () => {
  router.push({ name: "NarrativeTimeline", params: { id: narrativeId } });
};

const viewMap = () => {
  router.push({ name: "NarrativeMap", params: { id: narrativeId } });
};

const selectEvent = (event: Event) => {
  selectedEvent.value = event;
};

const goBack = () => {
  router.push({ name: "Home" });
};
</script>

<style scoped>
.narrative-detail-container {
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.narrative-title {
  text-align: center;
  flex-shrink: 0;
  margin-bottom: 10px;
}

.narrative-title h3 {
  font-size: 1.25rem;
  margin: 0;
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
