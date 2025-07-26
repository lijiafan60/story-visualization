<!-- @/views/NarrativeView -->
<template>
  <n-layout position="absolute">
    <n-layout-header bordered class="header">
      <n-flex justify="space-between">
        <n-button @click="goToHome" secondary round>主页</n-button>
        <n-h2 style="margin: 0">{{ title }}</n-h2>
        <n-flex>
          <n-button @click="goToTimeline(narrativeId)" secondary round>叙事时间线</n-button>
          <n-button @click="goToStoryMap(narrativeId)" secondary round>叙事地图</n-button>
        </n-flex>
      </n-flex>
    </n-layout-header>

    <n-layout-content class="content">
      <div>
        <entity-list :entities="entities" @save-entity="saveEntity" />
      </div>
      <n-split class="main-split" direction="horizontal">
        <template #1>
          <event-carousel :events="events" @select-event="selectEvent" />
        </template>
        <template #2>
          <event-form
            :event="selectedEvent"
            :entities="entities"
            @save-event="saveEvent"
            @clear-form="clearForm"
          />
        </template>
      </n-split>
    </n-layout-content>
  </n-layout>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Event } from '@/mock/types'
import { useNavigation } from '@/router/useNavigation'
import EntityList from '@/components/EntityList.vue'
import EventForm from '@/components/EventForm.vue'
import EventCarousel from '@/components/EventCarousel.vue'
import { useNarrativesStore } from '@/stores'
import { storeToRefs } from 'pinia'

const route = useRoute()
const narrativesStore = useNarrativesStore()
const { narratives } = storeToRefs(narrativesStore)

const narrativeId = computed(() => route.params.id as string)
const { goToHome, goToStoryMap, goToTimeline } = useNavigation()

const narrative = computed(() => {
  return narratives.value.find((nar) => nar.id === narrativeId.value)
})

const selectedEvent = ref<Event | null>(null)

const title = computed(() => narrative.value?.title || '')
const entities = computed(() => narrative.value?.entities || [])
const events = computed(() => narrative.value?.events || [])

const selectEvent = (event: Event) => {
  selectedEvent.value = event
}

const saveEvent = async (event: Event) => {
  if (narrative.value) {
    await narrativesStore.saveEventToNarrative(narrativeId.value, event)
  }
}

const clearForm = () => {
  selectedEvent.value = null
}

const saveEntity = async (entity: Entity) => {
  if (narrative.value) {
    await narrativesStore.saveEntityToNarrative(narrativeId.value, entity)
    // 更新本地 entities 数组
    if (!entities.value.find((e) => e.id === entity.id)) {
      entities.value.push(entity)
    }
  }
}

onMounted(async () => {
  await narrativesStore.fetchNarratives(narrativeId.value)
})
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
</style>
