<!-- EventForm.vue -->
<template>
  <n-card :title="event ? '编辑' : '新建'" class="event-form-card">
    <n-scrollbar>
      <n-form :model="form" @submit.prevent="onSubmit">
        <n-form-item label="标题">
          <n-input v-model:value="form.title" />
        </n-form-item>
        <n-space>
            <n-form-item label="开始日期">
              <flexible-date-picker v-model="form.startDate" />
            </n-form-item>
            <n-form-item label="结束日期">
              <flexible-date-picker v-model="form.endDate" />
            </n-form-item>
        </n-space>
        <n-form-item label="地点">
          <location-picker v-model="form.location" />
        </n-form-item>
        <n-form-item label="描述">
          <n-input v-model:value="form.description" type="textarea" />
        </n-form-item>
        <n-form-item label="事件类型">
          <n-select v-model:value="form.type" :options="eventTypeOptions" />
        </n-form-item>
        <n-form-item label="相关实例">
          <n-select
            v-model:value="form.relatedEntities"
            multiple
            :options="entityOptions"
          />
        </n-form-item>
        <n-space justify="end">
          <n-button @click="clearForm">清空/新建</n-button>
          <n-button type="primary" attr-type="submit">保存</n-button>
        </n-space>
      </n-form>
    </n-scrollbar>
  </n-card>
  <n-modal v-model:show="showConfirmModal" preset="dialog" title="确认" content="确定要保存这个事件吗？">
    <template #action>
      <n-button @click="cancelSave">取消</n-button>
      <n-button type="primary" @click="confirmSave">确认</n-button>
    </template>
  </n-modal>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import {
  NCard,
  NForm,
  NFormItem,
  NInput,
  NButton,
  NSpace,
  NSelect,
  NScrollbar,
  NModal,
} from "naive-ui";
import { Event, Entity, eventTypes } from "@/mock/types";
import FlexibleDatePicker from '@/components/FlexibleDatePicker.vue';
import LocationPicker from '@/components/LocationPicker.vue'

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
  startDate: {year: "", month: "", day: ""},
  endDate: {year: "", month: "", day: ""},
  location: { name: "", lat: 0, lng: 0 },
  description: "",
  type: "",
  relatedEntities: [],
});

const entityOptions = computed(() =>
  props.entities.map(entity => ({
    label: entity.name,
    value: entity.name
  })).filter(option => !form.value.relatedEntities.includes(option.value))
);
const eventTypeOptions = computed(() =>
  eventTypes.map(type => ({
    label: type.charAt(0) + type.slice(1).toLowerCase().replace('_', ' '),
    value: type
  }))
);

watch(
  () => props.event,
  (newEvent) => {
    if (newEvent) {
      form.value = JSON.parse(JSON.stringify(newEvent)); // Deep copy
    } else {
      form.value = {
        id: "",
        title: "",
        startDate: {year: "", month: "", day: ""},
        endDate: {year: "", month: "", day: ""},
        location: { name: "", lat: 0, lng: 0 },
        description: "",
        type: "",
        relatedEntities: [],
      };
    }
  },
  { immediate: true, deep: true }
);

const showConfirmModal = ref(false);

const onSubmit = () => {
  showConfirmModal.value = true;
};

const confirmSave = () => {
  const eventToSave = JSON.parse(JSON.stringify(form.value));
  form.value = {
    id: "",
    title: "",
    startDate: {year: "", month: "", day: ""},
    endDate: {year: "", month: "", day: ""},
    location: { name: "", lat: 0, lng: 0 },
    description: "",
    type: "",
    relatedEntities: [],
  };
  emit("save-event", eventToSave);
  showConfirmModal.value = false;
};

const cancelSave = () => {
  showConfirmModal.value = false;
};

const clearForm = () => {
  form.value = {
    id: "",
    title: "",
    startDate: {year: "", month: "", day: ""},
    endDate: {year: "", month: "", day: ""},
    location: { name: "", lat: 0, lng: 0 },
    description: "",
    type: "",
    relatedEntities: [],
  };
  emit("clear-form");
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
