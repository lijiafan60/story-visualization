<template>
  <n-layout position="absolute">
    <n-layout-header bordered style="height: 64px; padding: 16px 24px" class="header">
      <n-space justify="space-between" align="center" style="height: 100%">
        <div></div>
        <n-h2 style="margin: 0">Narrative Visualization Site</n-h2>
        <n-space>
          <n-button>Login</n-button>
          <n-button type="primary">Sign Up</n-button>
        </n-space>
      </n-space>
    </n-layout-header>

    <n-layout-content content-style="padding: 24px;" class="content">
      <n-grid x-gap="24" y-gap="24" cols="2">
        <n-gi>
          <n-card hoverable class="action-card">
            <n-space vertical align="center">
              <n-icon size="40" color="#18A058">
                <n-icon-add />
              </n-icon>
              <n-h3>Start a New Project</n-h3>
              <n-p style="text-align: center">
                Create a new story map from scratch. Begin your narrative journey here.
              </n-p>
              <n-button type="primary" size="large" @click="startNewProject">
                Create Project
              </n-button>
            </n-space>
          </n-card>
        </n-gi>
        <n-gi>
          <n-card hoverable class="action-card">
            <n-space vertical align="center">
              <n-icon size="40" color="#2080F0">
                <n-icon-folder-open />
              </n-icon>
              <n-h3>Open Existing Project</n-h3>
              <n-p style="text-align: center">
                Continue working on a previously saved project. Pick up where you left
                off.
              </n-p>
              <n-space align="center">
                <n-select
                  v-model="selectedNarrativeId"
                  :options="narrativeOptions"
                  placeholder="Select a Narrative"
                  style="width: 200px"
                  @update:value="logSelectedValue"
                />
                <n-button
                  size="large"
                  @click="openExistingProject"
                  :disabled="!selectedNarrativeId"
                >
                  Open Project
                </n-button>
              </n-space>
            </n-space>
          </n-card>
        </n-gi>
      </n-grid>

      <n-card title="Featured Narratives" style="margin-top: 24px">
        <n-carousel
          show-arrow
          dot-type="line"
          :loop="true"
          :autoplay="true"
          :interval="5000"
          :slides-per-view="3"
          :space-between="20"
          draggable
          :touch="true"
          :mousewheel="true"
          arrow-style="background-color: rgba(0, 0, 0, .2); color: #fff;"
          style="height: 360px"
        >
          <n-carousel-item v-for="narrative in narratives" :key="narrative.id">
            <n-card
              :title="narrative.title"
              :bordered="false"
              size="small"
              class="narrative-card"
              @click="viewNarrative(narrative.id)"
            >
              <template #cover>
                <img
                  :src="narrative.imageUrl"
                  :alt="narrative.title"
                  class="narrative-image"
                />
              </template>
              <n-p class="narrative-description">{{ narrative.description }}</n-p>
              <n-space justify="end" class="narrative-button-container">
                <n-button size="small" @click="viewNarrative(narrative.id)">
                  View Details
                </n-button>
              </n-space>
            </n-card>
          </n-carousel-item>
        </n-carousel>
      </n-card>
    </n-layout-content>

    <n-layout-footer bordered style="height: 64px; padding: 16px 24px">
      <n-space justify="space-between" align="center">
        <n-text>© 2023 Narrative Visualization. All rights reserved.</n-text>
        <n-space>
          <n-button text>About</n-button>
          <n-button text>Contact</n-button>
          <n-button text>Privacy Policy</n-button>
        </n-space>
      </n-space>
    </n-layout-footer>
  </n-layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { narratives } from "../mock/narratives";

const router = useRouter();

const selectedNarrativeId = ref<string | null>(null); // 修改为 string 或 null

const startNewProject = () => {
  console.log("Starting new project");
};

const openExistingProject = () => {
  if (selectedNarrativeId.value !== null) {
    console.log("Opening project with id:", selectedNarrativeId.value);
    router.push({ name: "Narrative", params: { id: selectedNarrativeId.value } });
  } else {
    console.error("No narrative selected");
  }
};

const viewNarrative = (id: string) => {
  router.push({ name: "Narrative", params: { id } });
};

const narrativeOptions = narratives.map((narrative) => ({
  label: narrative.title,
  value: narrative.id, // 保持 ID 为 string 类型
}));

// 调试用的日志函数
const logSelectedValue = (value: string | null) => {
  console.log("Selected narrative ID:", value);
  selectedNarrativeId.value = value;
};
</script>

<style scoped>
.header {
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
  height: 340px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
}

.narrative-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.narrative-description {
  height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.narrative-button-container {
  margin-top: auto;
}
</style>
