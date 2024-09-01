<template>
  <n-card class="entity-list-card">
    <n-tabs type="segment" animated>
      <n-tab-pane v-for="type in entityTypes" :key="type" :name="type">
        <div class="entity-grid" @dragover.prevent @drop="onDrop($event, type)">
          <n-tag
            v-for="entity in entitiesByType[type]"
            :key="entity.id"
            round
            size="large"
            class="entity-tag"
            :style="getStyleForType(entity.type)"
            draggable="true"
            @dragstart="onDragStart($event, entity, type)"
            @dragend="onDragEnd"
          >
            {{ entity.name }}
          </n-tag>
        </div>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import { NCard, NTabs, NTabPane, NTag } from "naive-ui";

const props = defineProps<{
  entities: Array<{ id: string; name: string; type: string }>;
}>();

const emit = defineEmits(["update:entities"]);

// Define your entity types explicitly
const entityTypes = ["PEOPLE", "ORGS", "OBJECTS", "CONCEPTS", "PLACES", "WORKS", "OTHER"]; // Add more types as needed

const entitiesByType = computed(() => {
  return entityTypes.reduce((acc, type) => {
    acc[type] = props.entities.filter((entity) => entity.type === type);
    return acc;
  }, {} as Record<string, typeof props.entities>);
});

const colorMap: Record<
  string,
  { color: string; textColor: string; hoverColor: string; hoverTextColor: string }
> = {
  PEOPLE: {
    color: "#d9f7be",
    textColor: "#389e0d",
    hoverColor: "#b7eb8f",
    hoverTextColor: "#237804",
  },
  ORGS: {
    color: "#bae7ff",
    textColor: "#096dd9",
    hoverColor: "#91d5ff",
    hoverTextColor: "#0050b3",
  },
  OBJECTS: {
    color: "#ffccc7",
    textColor: "#cf1322",
    hoverColor: "#ffa39e",
    hoverTextColor: "#a8071a",
  },
  CONCEPTS: {
    color: "#e4e1f8",
    textColor: "#531dab",
    hoverColor: "#d3adf7",
    hoverTextColor: "#391085",
  },
  PLACES: {
    color: "#fff1b8",
    textColor: "#d48806",
    hoverColor: "#ffe58f",
    hoverTextColor: "#ad6800",
  },
  WORKS: {
    color: "#ff9c6e",
    textColor: "#d0460f",
    hoverColor: "#ff7a45",
    hoverTextColor: "#ad2102",
  },
  OTHER: {
    color: "#ffd666",
    textColor: "#ad6800",
    hoverColor: "#fff566",
    hoverTextColor: "#d48806",
  },
  // Adjust colors as needed for aesthetic coherence and readability
};

const isHorizontal = ref(false);

const updateLayout = () => {
  const aspectRatio = window.innerWidth / window.innerHeight;
  isHorizontal.value = aspectRatio > 1.2; // Adjust this threshold as needed
};

onMounted(() => {
  updateLayout();
  window.addEventListener("resize", updateLayout);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateLayout);
});

const getStyleForType = (type: string) => {
  const colors = colorMap[type] || {
    color: "#f5f5f5",
    textColor: "#8c8c8c",
    hoverColor: "#d9d9d9",
    hoverTextColor: "#595959",
  };
  return {
    backgroundColor: colors.color,
    color: colors.textColor,
    "--hover-bg-color": colors.hoverColor,
    "--hover-text-color": colors.hoverTextColor,
  };
};

const draggedEntity = ref(null);
const draggedType = ref(null);

const onDragStart = (event: DragEvent, entity, type) => {
  draggedEntity.value = entity;
  draggedType.value = type;
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", entity.id);
  }
};

const onDragEnd = () => {
  draggedEntity.value = null;
  draggedType.value = null;
};

const onDrop = (event: DragEvent, targetType) => {
  event.preventDefault();
  if (draggedEntity.value && draggedType.value !== targetType) {
    const updatedEntities = props.entities.map((e) =>
      e.id === draggedEntity.value.id ? { ...e, type: targetType } : e
    );
    emit("update:entities", updatedEntities);
  }
};
</script>

<style scoped>
.entity-list-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.entity-tabs {
  flex: 1;
  display: flex;
  flex-direction: row;
}

.entity-tabs :deep(.n-tabs-nav--left) {
  width: 150px; /* Ensure tabs have sufficient width */
  flex-shrink: 0;
}

.entity-tabs :deep(.n-tabs-wrapper) {
  flex-direction: column;
}

.entity-tabs :deep(.n-tabs-content) {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}

.entity-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.entity-tag {
  margin: 4px;
  cursor: move;
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

.custom-tab {
  padding: 4px 8px;
  border-radius: 4px;
  text-align: left;
}
</style>
