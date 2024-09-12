<!-- src/components/EntityForm.vue -->  
<template>  
  <n-form :model="form" @submit.prevent="onSubmit">  
    <n-form-item label="Name">  
      <n-input v-model:value="form.name" />  
    </n-form-item>  
    <n-form-item label="Type">  
      <n-select v-model:value="form.type" :options="typeOptions" />  
    </n-form-item>  
    <n-space justify="end">  
      <n-button @click="$emit('cancel')">Cancel</n-button>  
      <n-button type="primary" attr-type="submit">Save</n-button>  
    </n-space>  
  </n-form>  
</template>  

<script lang="ts" setup>  
import { ref, watch } from 'vue';  
import { NForm, NFormItem, NInput, NSelect, NButton, NSpace } from 'naive-ui';  
import { Entity } from '@/mock/types';

const props = defineProps<{  
  entity?: Entity | null;  
}>();  

const emit = defineEmits<{  
  (e: 'save', entity: Entity): void;  
  (e: 'cancel'): void;  
}>();  

const form = ref<Entity>({  
  id: '',  
  name: '',  
  type: 'person',  
});  

const typeOptions = [  
  { label: 'Person', value: 'person' },  
  { label: 'Place', value: 'place' },  
  { label: 'Organization', value: 'organization' },  
];  

watch(() => props.entity, (newEntity) => {  
  if (newEntity) {  
    form.value = { ...newEntity };  
  } else {  
    form.value = { id: '', name: '', type: 'person' };  
  }  
}, { immediate: true });  

const onSubmit = () => {  
  emit('save', form.value);  
};  
</script>