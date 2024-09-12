
<template>
  <n-card class="entity-list-card">
    <n-tabs placement="left">
      <n-tab-pane v-for="type in entityTypes" :key="type" :name="type" :tab="type">
        <n-space>
          <n-tag
            v-for="entity in entitiesByType[type]"
            :key="entity.id"
            round
            size="large"
            class="entity-tag"
            :style="getStyleForType(entity.type)"
          >
            {{ entity.name }}
          </n-tag>
        </n-space>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { NCard, NTabs, NTabPane, NTag } from "naive-ui";
import { EntityTypesEnum, entityTypes, Entity } from '@/mock/types';

const props = defineProps<{
  entities: Entity[];
}>();

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
</script>

<style scoped>
.entity-list-card {
  height: 100%;
}

.entity-tag {
  margin: 4px;
  transition: background-color 0.3s, color 0.3s, transform 0.1s;
}

.entity-tag:hover {
  background-color: var(--hover-bg-color) !important;
  color: var(--hover-text-color) !important;
  transform: scale(1.05);
}

.entity-tag:active {
  transform: scale(0.95);
}
</style>
