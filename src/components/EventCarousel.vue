<!-- src/components/EventCarousel.vue -->
<template>
  <div class="event-carousel" @wheel.passive="handleWheel">
    <n-carousel
      ref="carousel"
      :loop="false"
      show-arrow
      dot-type="line"
      :autoplay="false"
      :slides-per-view="slidesPerView"
      :space-between="20"
      draggable
    >
      <n-carousel-item v-for="event in sortedEvents" :key="event.id">
        <n-card
          :title="event.title"
          class="event-card"
          hoverable
          @click="selectEvent(event)"
        >
          <p>{{ formatDate(event.startDate) }}</p>
          <p class="event-description">{{ event.description }}</p>
        </n-card>
      </n-carousel-item>
    </n-carousel>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import { NCard, NCarousel, NCarouselItem } from "naive-ui";
import { Event } from "../mock/narrativeData";

const props = defineProps<{
  events: Event[];
}>();

const emit = defineEmits<{
  (e: "select-event", event: Event): void;
}>();

const carousel = ref(null);
const windowWidth = ref(window.innerWidth);

const CARD_WIDTH = 250; // Width of each card in pixels
const CARD_MARGIN = 20; // Space between cards in pixels

const slidesPerView = computed(() => {
  const availableWidth = windowWidth.value - 40; // Subtracting 40px for container padding
  return Math.max(1, Math.floor(availableWidth / (CARD_WIDTH + CARD_MARGIN)));
});

const sortedEvents = computed(() =>
  [...props.events].sort((a, b) => a.startDate - b.startDate)
);

const formatDate = (timestamp: number) => {
  return new Date(timestamp).toLocaleDateString();
};

const selectEvent = (event: Event) => {
  emit("select-event", event);
};

const handleWheel = (e: WheelEvent) => {
  if (carousel.value) {
    if (e.deltaY > 0) {
      carousel.value.next();
    } else {
      carousel.value.prev();
    }
  }
};

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.event-carousel {
  height: 100%;
  padding: 20px;
}

.event-card {
  width: 250px; /* Fixed width for all cards */
  height: 200px; /* Fixed height for all cards */
  display: flex;
  flex-direction: column;
  cursor: pointer;
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
