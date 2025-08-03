<!-- @/views/HomeView -->
<template>
  <n-layout position="absolute">
    <n-layout-header bordered class="header">
      <n-space justify="space-between" align="center" style="height: 100%">
        <div></div>
        <n-h2 style="margin: 0">故事地图构建和可视化工具</n-h2>
        <n-space>
          <n-button>登录</n-button>
          <n-button type="primary">注册</n-button>
        </n-space>
      </n-space>
    </n-layout-header>

    <n-layout-content content-style="padding: 24px;" class="content">
      <n-grid x-gap="24" y-gap="24" cols="2">
        <n-gi>
          <n-card hoverable class="action-card">
            <n-space vertical align="center">
              <n-icon size="40" color="#18A058">
              </n-icon>
              <n-h3>开始新项目</n-h3>
              <n-p style="text-align: center">
                从头开始创建新的故事地图。在这里开启您的叙事之旅。
              </n-p>
              <n-button type="primary" size="large" @click="startNewProject">
                创建项目
              </n-button>
            </n-space>
          </n-card>
        </n-gi>
        <n-gi>
          <n-card hoverable class="action-card" >
            <n-space vertical align="center">
              <n-icon size="40" color="#2080F0">
              </n-icon>
              <n-h3>打开现有项目</n-h3>
              <n-p style="text-align: center">
                继续处理之前保存的项目。从上次停止的地方继续。
              </n-p>
              <n-space align="center">
                <n-select
                  v-model:value="selectedNarrativeId"
                  :options="narrativeOptions"
                  placeholder="选择一个叙事"
                  style="width: 200px"
                />
                <n-button
                  size="large"
                  @click="openExistingProject"
                  :disabled="!selectedNarrativeId"
                >
                  打开项目
                </n-button>
              </n-space>
            </n-space>
          </n-card>
        </n-gi>
      </n-grid>

      <n-card title="精选叙事" style="margin-top: 24px">
        <n-carousel
          :autoplay="true"
          :slides-per-view="5"
          :space-between="20"
          draggable
          mousewheel
        >
          <n-carousel-item v-for="narrative in narratives" :key="narrative.id">
            <n-card
              :title="narrative.title"
              class="narrative-card"
              @click="goToNarrative(narrative.id)"
              hoverable
            >
              <template #cover>
                <n-image
                  :src=getImageUrl(narrative.imageUrl)
                  :alt="narrative.title"
                />
              </template>
              <template #footer>
                <n-p>{{ narrative.description }}</n-p>
              </template>
              <template #action>
                <n-space>
                  <n-button @click="goToNarrative(narrative.id)">
                    编辑
                  </n-button>
                  <n-button primary @click="goToTimeline(narrative.id)">
                    叙事时间线
                  </n-button>
                  <n-button @click="goToStoryMap(narrative.id)">
                    故事地图
                  </n-button>
                </n-space>
              </template>
            </n-card>
          </n-carousel-item>
        </n-carousel>
      </n-card>
    </n-layout-content>
  </n-layout>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { useNavigation } from '@/router/useNavigation'
import { useNarrativesStore } from '@/stores'
import { storeToRefs } from 'pinia'

const { goToNarrative, goToTimeline, goToStoryMap } = useNavigation()
const narrativesStore = useNarrativesStore()
const { narratives } = storeToRefs(narrativesStore)

const selectedNarrativeId = ref<string | null>(null);

const startNewProject = () => {
  console.log("Starting new project");
  // Here you might want to call a store action to create a new narrative
  // narrativesStore.createNarrative()
};

const openExistingProject = () => {
  if (selectedNarrativeId.value) {
    console.log("Opening project with id:", selectedNarrativeId.value);
    goToNarrative(selectedNarrativeId.value);
  } else {
    console.error("No narrative selected");
  }
};

const narrativeOptions = computed(() =>
  narratives.value.map((narrative) => ({
    label: narrative.title,
    value: narrative.id,
  }))
);

const getImageUrl = (imageUrl) => {
  return imageUrl;
};

onMounted(async () => {
  await narrativesStore.fetchNarratives()
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
  margin-top: 64px;
}

.action-card {
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.3s ease;
}

.action-card:hover {
  transform: translateY(-5px);
}

.narrative-card {
  height: 400px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
}
</style>
