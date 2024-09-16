<template>
  <n-space vertical>
    <n-radio-group v-model:value="localDateType" name="dateType">
      <n-radio-button value="year">年</n-radio-button>
      <n-radio-button value="month">月</n-radio-button>
      <n-radio-button value="date">日</n-radio-button>
    </n-radio-group>
    <n-date-picker
      v-model:value="localDate"
      :type="localDateType"
      :format="dateFormat"
      clearable
      @update:value="handleDateChange"
    />
  </n-space>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { NSpace, NRadioGroup, NRadioButton, NDatePicker } from 'naive-ui';
import { NDate } from '@/mock/types';

const props = defineProps<{
  modelValue: NDate;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: NDate): void;
}>();

const localDateType = ref('date');
const localDate = ref<number | null>(null);

const dateFormat = computed(() => {
  switch (localDateType.value) {
    case 'year':
      return 'yyyy';
    case 'month':
      return 'yyyy-MM';
    default:
      return 'yyyy-MM-dd';
  }
});

watch(() => props.modelValue, (newValue) => {
  if (newValue.year) {
    const date = new Date(
      parseInt(newValue.year),
      newValue.month ? parseInt(newValue.month) - 1 : 0,
      newValue.day ? parseInt(newValue.day) : 1
    );
    localDate.value = date.getTime();

    if (newValue.day) {
      localDateType.value = 'date';
    } else if (newValue.month) {
      localDateType.value = 'month';
    } else {
      localDateType.value = 'year';
    }
  } else {
    localDate.value = null;
  }
}, { immediate: true, deep: true });

const handleDateChange = (timestamp: number | null) => {
  if (timestamp) {
    const date = new Date(timestamp);
    const newValue: NDate = {
      year: date.getFullYear().toString(),
      month: localDateType.value !== 'year' ? (date.getMonth() + 1).toString().padStart(2, '0') : '',
      day: localDateType.value === 'date' ? date.getDate().toString().padStart(2, '0') : '',
    };
    emit('update:modelValue', newValue);
  } else {
    emit('update:modelValue', { year: '', month: '', day: '' });
  }
};

watch(localDateType, () => {
  if (localDate.value) {
    handleDateChange(localDate.value);
  }
});
</script>
