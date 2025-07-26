<!-- src/components/EventCarousel.vue -->
<template>
  <div class="event-carousel">
    <n-flex>
      <n-card
        v-for="event in sortedEvents"
        :key="event.id"
        :title="event.title"
        class="event-card"
        hoverable
        embedded
        @click="selectEvent(event)"
      >
        <p>{{ formatNDate(event.startDate) }}</p>
        <p class="event-description">{{ event.description }}</p>
      </n-card>
    </n-flex>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { Event, formatNDate, compareNDates } from '@/mock/types'

const props = defineProps<{
  events: Event[]
}>()

const emit = defineEmits<{
  (e: 'select-event', event: Event): void
}>()

const windowWidth = ref(window.innerWidth)

const sortedEvents = computed(() =>
  [...props.events].sort((a, b) => compareNDates(a.startDate, b.startDate))
)

const selectEvent = (event: Event) => {
  emit('select-event', event)
}

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.event-carousel {
  margin: 20px;
  height: 100%;
  overflow: auto;
}

.event-card {
  width: 250px; /* Fixed width for all cards */
  height: 200px; /* Fixed height for all cards */
  cursor: pointer;
  border-radius: 10px 20px;
}

.event-card img {
  width: 100%;
  height: 150px; /* Fixed height for images */
  object-fit: cover;
}

.event-description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
