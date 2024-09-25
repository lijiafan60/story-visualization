
<template>
  <n-card class="entity-list-card">
    <n-tabs placement="left" type="card">
      <n-tab-pane name="ALL" tab="ALL">
        <n-scrollbar>
          <n-space align="center" justify="start" style="padding: 8px;">
            <n-popover
              v-for="entity in props.entities"
              :key="entity.id"
              trigger="click"
              placement="right"
            >
              <template #trigger>
                <n-tag
                  round
                  size="large"
                  class="entity-tag"
                  :style="getStyleForType(entity.type)"
                >
                  {{ entity.name }}
                </n-tag>
              </template>
              <div class="entity-popover-content">
                <n-table :bordered="false" :single-line="false">
                  <tbody>
                  <tr>
                    <td><strong>名称</strong></td>
                    <td>{{ entity.name }}</td>
                  </tr>
                  <tr>
                    <td><strong>类型</strong></td>
                    <td>{{ entity.type }}</td>
                  </tr>
                  <tr>
                    <td><strong>描述</strong></td>
                    <td>{{ entity.desc }}</td>
                  </tr>
                  </tbody>
                </n-table>
              </div>
            </n-popover>
            <n-button circle type="primary" @click="showCreateModal()">
              <template #icon>
                <n-icon><add-icon /></n-icon>
              </template>
            </n-button>
          </n-space>
        </n-scrollbar>
      </n-tab-pane>
      <n-tab-pane v-for="type in entityTypes" :key="type" :name="type" :tab="type">
        <n-scrollbar>
          <n-space align="center" justify="start" style="padding: 8px;">
            <n-popover
              v-for="entity in entitiesByType[type]"
              :key="entity.id"
              trigger="click"
              placement="right"
            >
              <template #trigger>
                <n-tag
                  round
                  size="large"
                  class="entity-tag"
                  :style="getStyleForType(entity.type)"
                >
                  {{ entity.name }}
                </n-tag>
              </template>
              <div class="entity-popover-content">
                <n-table :bordered="false" :single-line="false">
                  <tbody>
                  <tr>
                    <td><strong>名称</strong></td>
                    <td>{{ entity.name }}</td>
                  </tr>
                  <tr>
                    <td><strong>类型</strong></td>
                    <td>{{ entity.type }}</td>
                  </tr>
                  <tr>
                    <td><strong>描述</strong></td>
                    <td>{{ entity.desc }}</td>
                  </tr>
                  </tbody>
                </n-table>
              </div>
            </n-popover>
            <n-button circle type="primary" @click="showCreateModal(type)">
              <template #icon>
                <n-icon><add-icon /></n-icon>
              </template>
            </n-button>
          </n-space>
        </n-scrollbar>
      </n-tab-pane>
    </n-tabs>
  </n-card>

  <n-modal
    v-model:show="showModal"
    preset="card"
    title="新建实体"
    :style="{ width: '460px' }"
    :mask-closable="false"
  >
    <n-form
      ref="formRef"
      :model="formModel"
      :rules="rules"
      label-placement="left"
      label-width="80"
      require-mark-placement="right-hanging"
      size="medium"
    >
      <n-form-item label="名称" path="name">
        <n-input v-model:value="formModel.name" placeholder="输入实体名称">
        </n-input>
      </n-form-item>
      <n-form-item label="类型" path="type">
        <n-select
          v-model:value="formModel.type"
          :options="entityTypeOptions"
          placeholder="选择实体类型"
        >
        </n-select>
      </n-form-item>
      <n-form-item label="描述" path="desc">
        <n-input
          v-model:value="formModel.desc"
          type="textarea"
          placeholder="输入实体描述"
          :autosize="{ minRows: 3, maxRows: 5 }"
        />
      </n-form-item>
    </n-form>
    <template #footer>
      <n-space justify="end">
        <n-button @click="closeModal" :style="{ marginRight: '12px' }">取消</n-button>
        <n-button type="primary" @click="createEntity" :loading="submitting">
          {{ submitting ? '保存中...' : '保存' }}
        </n-button>
      </n-space>
    </template>
  </n-modal>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { NCard, NTabs, NTabPane, NTag, NPopover, NTable, NSpace, NScrollbar, NButton, NModal, NForm, NFormItem, NInput, NSelect, NIcon } from "naive-ui";
import { Add as AddIcon } from "@vicons/ionicons5";
import { EntityTypesEnum, entityTypes, Entity } from '@/mock/types';

const props = defineProps<{
  entities: Entity[];
}>();

const emit = defineEmits(['save-entity']);

const entitiesByType = computed(() => {
  return entityTypes.reduce((acc, type) => {
    acc[type] = props.entities.filter((entity) => entity.type === type);
    return acc;
  }, {} as Record<EntityTypesEnum, Entity[]>);
});

const colorMap: Record<
  EntityTypesEnum,
  { color: string; textColor: string; hoverColor: string; hoverTextColor: string }
> = {
  [EntityTypesEnum.Person]: {
    color: "#d9f7be",
    textColor: "#389e0d",
    hoverColor: "#b7eb8f",
    hoverTextColor: "#237804",
  },
  [EntityTypesEnum.Organization]: {
    color: "#bae7ff",
    textColor: "#096dd9",
    hoverColor: "#91d5ff",
    hoverTextColor: "#0050b3",
  },
  [EntityTypesEnum.Object]: {
    color: "#ffccc7",
    textColor: "#cf1322",
    hoverColor: "#ffa39e",
    hoverTextColor: "#a8071a",
  },
  [EntityTypesEnum.Concept]: {
    color: "#e4e1f8",
    textColor: "#531dab",
    hoverColor: "#d3adf7",
    hoverTextColor: "#391085",
  },
  [EntityTypesEnum.Location]: {
    color: "#fff1b8",
    textColor: "#d48806",
    hoverColor: "#ffe58f",
    hoverTextColor: "#ad6800",
  },
  [EntityTypesEnum.Work]: {
    color: "#ff9c6e",
    textColor: "#d0460f",
    hoverColor: "#ff7a45",
    hoverTextColor: "#ad2102",
  },
  [EntityTypesEnum.Event]: {
    color: "#ffd666",
    textColor: "#ad6800",
    hoverColor: "#fff566",
    hoverTextColor: "#d48806",
  },
  [EntityTypesEnum.Date]: {
    color: "#b5f5ec",
    textColor: "#13a8a8",
    hoverColor: "#87e8de",
    hoverTextColor: "#006d75",
  },
  [EntityTypesEnum.Time]: {
    color: "#ffd6e7",
    textColor: "#c41d7f",
    hoverColor: "#ffadd2",
    hoverTextColor: "#9e1068",
  },
  [EntityTypesEnum.Document]: {
    color: "#d9d9d9",
    textColor: "#434343",
    hoverColor: "#bfbfbf",
    hoverTextColor: "#262626",
  },
  [EntityTypesEnum.Other]: {
    color: "#f5f5f5",
    textColor: "#8c8c8c",
    hoverColor: "#d9d9d9",
    hoverTextColor: "#595959",
  },
};

const getStyleForType = (type: EntityTypesEnum) => {
  const colors = colorMap[type] || colorMap[EntityTypesEnum.Other];
  return {
    backgroundColor: colors.color,
    color: colors.textColor,
    '--hover-bg-color': colors.hoverColor,
    '--hover-text-color': colors.hoverTextColor,
  };
};
const showModal = ref(false);
const formRef = ref(null);
const formModel = ref({
  name: '',
  type: null as EntityTypesEnum | null,
  desc: ''
});

const rules = {
  name: {
    required: true,
    message: '请输入实体名称',
    trigger: 'blur'
  },
  type: {
    required: true,
    message: '请选择实体类型',
    trigger: ['blur', 'change']
  }
};

const entityTypeOptions = entityTypes.map(type => ({
  label: type,
  value: type
}));

const showCreateModal = (type?: EntityTypesEnum) => {
  formModel.value = {
    name: '',
    type: type || null,
    desc: ''
  };
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const createEntity = () => {
  formRef.value?.validate((errors: any) => {
    if (!errors) {
      const newEntity: Entity = {
        id: Date.now().toString(),
        name: formModel.value.name,
        type: formModel.value.type!,
        desc: formModel.value.desc
      };
      emit('save-entity', newEntity);
      closeModal();
    }
  });
};
</script>

<style scoped>
.entity-list-card {
  height: 100%;
}

.entity-tag {
  margin: 4px;
  transition: background-color 0.3s, color 0.3s, transform 0.1s;
  cursor: pointer;
}

.entity-tag:hover {
  background-color: var(--hover-bg-color) !important;
  color: var(--hover-text-color) !important;
  transform: scale(1.05);
}

.entity-popover-content {
  max-width: 300px;
  overflow-wrap: break-word;
}
</style>
