<!-- EventForm.vue -->
<template>
  <n-card :title="event ? 'Edit Event' : 'Add New Event'" class="event-form-card">
    <n-scrollbar>
      <n-form :model="form" @submit.prevent="onSubmit">
        <n-form-item label="Title">
          <n-input v-model:value="form.title" />
        </n-form-item>
        <n-form-item label="Date">
          <n-date-picker v-model:value="dateRange" type="daterange" clearable />
        </n-form-item>
        <n-form-item label="Location">
          <n-input-group>
            <n-input v-model:value="form.location.name" placeholder="Location name" />
            <n-input-number v-model:value="form.location.lat" placeholder="Latitude" />
            <n-input-number v-model:value="form.location.lng" placeholder="Longitude" />
          </n-input-group>
        </n-form-item>
        <n-form-item label="Description">
          <n-input v-model:value="form.description" type="textarea" />
        </n-form-item>
        <n-form-item label="Event Type">
          <n-select v-model:value="form.type" :options="eventTypeOptions" />
        </n-form-item>
        <n-form-item label="Related Entities">
          <n-select
            v-model:value="form.relatedEntities"
            multiple
            :options="entityOptions"
          />
        </n-form-item>
        <n-space justify="end">
          <n-button @click="$emit('clear-form')">Clear</n-button>
          <n-button type="primary" attr-type="submit">Save</n-button>
        </n-space>
      </n-form>
    </n-scrollbar>
  </n-card>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import {
  NCard,
  NForm,
  NFormItem,
  NInput,
  NInputNumber,
  NInputGroup,
  NDatePicker,
  NButton,
  NSpace,
  NSelect,
  NScrollbar,
} from "naive-ui";
import { Event, Entity } from "@/mock/narrativeData";

const props = defineProps<{
  event: Event | null;
  entities: Entity[];
}>();

const emit = defineEmits<{
  (e: "save-event", event: Event): void;
  (e: "clear-form"): void;
}>();

const form = ref<Event>({
  id: "",
  title: "",
  startDate: Date.now(),
  endDate: Date.now(),
  location: { name: "", lat: 0, lng: 0 },
  description: "",
  type: "",
  relatedEntities: [],
});

const dateRange = ref<[number, number]>([1183135260000, Date.now()]);

const entityOptions = computed(() => props.entities);
const eventTypeOptions = ref<{ label: string; value: string }[]>([
  {
    label: "No Type",
    value: "no-type",
  },
  {
    label: "Historical Event",
    value: "historical-event",
  },
  {
    label: "Natural Event",
    value: "natural-event",
  },
]);

watch(
  () => props.event,
  (newEvent) => {
    if (newEvent) {
      form.value = { ...newEvent };
    } else {
      form.value = {
        id: "",
        title: "",
        startDate: Date.now(),
        endDate: Date.now(),
        location: { name: "", lat: 0, lng: 0 },
        description: "",
        type: "",
        relatedEntities: [],
      };
    }
  },
  { immediate: true }
);

const onSubmit = () => {
  emit("save-event", form.value);
};
</script>

<style scoped>
.event-form-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
}

.event-form-card :deep(.n-card__content) {
  flex-grow: 1;
  overflow: hidden;
}
</style>
