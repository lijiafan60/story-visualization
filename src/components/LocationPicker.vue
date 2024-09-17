
<template>
  <div class="location-picker">
    <n-input-group>
      <n-input v-model:value="locationName" placeholder="输入地点名称" @keydown.enter="searchLocation" />
      <n-button @click="searchLocation">搜索</n-button>
    </n-input-group>
    <div ref="mapContainer" class="map-container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { NInput, NInputGroup, NButton } from 'naive-ui';
import AMapLoader from '@amap/amap-jsapi-loader';
import axios from 'axios';

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({ name: '', lat: 39.909186, lng: 116.397411 })
  }
});

const emit = defineEmits(['update:modelValue']);

const locationName = ref(props.modelValue.name);
const mapContainer = ref(null);
let map = null;
let marker = null;

const AMAP_KEY = '7adafaaf41909bb002c6aa2550c738ca'; // 替换为您的Key
const AMAP_SECRET = 'd8d958ad5fb57a3dc4315483e22ccf3b'; // 仅在开发环境使用

onMounted(async () => {
  await setupSecurityConfig();
  await initMap();
});

async function setupSecurityConfig() {
  if (process.env.NODE_ENV === 'development') {
    // 开发环境：直接设置安全密钥
    window._AMapSecurityConfig = {
      securityJsCode: AMAP_SECRET,
    };
  } else {
    // 生产环境：从后端获取安全配置
    try {
      const response = await axios.get('/api/amap/security-config');
      window._AMapSecurityConfig = response.data;
    } catch (error) {
      console.error('Failed to get security config:', error);
    }
  }
}

async function initMap() {
  try {
    const AMap = await AMapLoader.load({
      key: AMAP_KEY,
      version: '2.0',
      plugins: ['AMap.Geocoder']
    });

    map = new AMap.Map(mapContainer.value, {
      zoom: 11,
      center: [props.modelValue.lng, props.modelValue.lat]
    });

    marker = new AMap.Marker({
      position: [props.modelValue.lng, props.modelValue.lat],
      draggable: true
    });
    map.add(marker);

    marker.on('dragend', (e) => {
      const lnglat = e.target.getPosition();
      updateLocation(lnglat.getLng(), lnglat.getLat());
    });

    map.on('click', (e) => {
      marker.setPosition(e.lnglat);
      updateLocation(e.lnglat.getLng(), e.lnglat.getLat());
    });
  } catch (error) {
    console.error('Failed to initialize AMap:', error);
  }
}

async function searchLocation() {
  if (!map) {
    console.error('Map is not initialized');
    return;
  }

  const geocoder = new AMap.Geocoder();
  geocoder.getLocation(locationName.value, (status, result) => {
    if (status === 'complete' && result.info === 'OK') {
      const lnglat = result.geocodes[0].location;
      map.setCenter(lnglat);
      marker.setPosition(lnglat);
      updateLocation(lnglat.getLng(), lnglat.getLat(), result.geocodes[0].formattedAddress);
    } else {
      alert('地址查找失败');
    }
  });
}

function updateLocation(lng, lat, name) {
  emit('update:modelValue', {
    name: name || locationName.value,
    lat: lat,
    lng: lng
  });
}

watch(() => props.modelValue, (newValue) => {
  locationName.value = newValue.name;
  if (map && marker) {
    marker.setPosition([newValue.lng, newValue.lat]);
    map.setCenter([newValue.lng, newValue.lat]);
  }
}, { deep: true });
</script>

<style scoped>
.location-picker {
  width: 100%;
}
.map-container {
  width: 100%;
  height: 300px;
  margin-top: 10px;
}
</style>
