
<template>
  <div class="location-picker">
    <n-input-group>
      <n-input v-model:value="locationName" placeholder="输入地点名称" @keydown.enter="searchLocation" />
      <n-button @click="searchLocation">搜索</n-button>
      <n-button @click="clearLocation">清空</n-button>
      <n-button @click="toggleMap">{{ isMapVisible ? '隐藏地图' : '展开地图' }}</n-button>
    </n-input-group>
    <p v-if="selectedLocation">
      坐标：({{ selectedLocation.lat.toFixed(6) }}, {{ selectedLocation.lng.toFixed(6) }})
    </p>
    <p v-else>未选择位置</p>
    <div v-show="isMapVisible" ref="mapContainer" class="map-container"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { NInput, NInputGroup, NButton } from 'naive-ui';
import AMapLoader from '@amap/amap-jsapi-loader';
import { Location } from '@/mock/types';

const props = defineProps<{
  modelValue: Location | null;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: Location | null): void;
}>();

const locationName = ref(props.modelValue?.name || '');
const mapContainer = ref<HTMLDivElement | null>(null);
const selectedLocation = ref<Location | null>(props.modelValue);
const isMapVisible = ref(false);
let map: any = null;
let marker: any = null;
let geocoder: any = null;
let isUpdatingFromMap = false;

const AMAP_KEY = '7adafaaf41909bb002c6aa2550c738ca';
const AMAP_SECRET = 'd8d958ad5fb57a3dc4315483e22ccf3b';

onMounted(async () => {
  if (props.modelValue) {
    isMapVisible.value = true;
    await initMap();
  }
});

async function initMap(): Promise<void> {
  if (map) return;

  window._AMapSecurityConfig = {
    securityJsCode: AMAP_SECRET,
  };

  try {
    const AMap = await AMapLoader.load({
      key: AMAP_KEY,
      version: '2.0',
      plugins: ['AMap.Geocoder']
    });

    map = new AMap.Map(mapContainer.value, {
      zoom: 5,
      center: props.modelValue ? [props.modelValue.lng, props.modelValue.lat] : [105.0, 35.0]
    });

    geocoder = new AMap.Geocoder();

    if (props.modelValue) {
      addMarker(props.modelValue.lng, props.modelValue.lat);
    }

    map.on('click', handleMapClick);
  } catch (error) {
    console.error('Failed to initialize AMap:', error);
  }
}

function addMarker(lng: number, lat: number): void {
  if (marker) {
    map.remove(marker);
  }
  marker = new AMap.Marker({
    position: [lng, lat],
    draggable: true
  });
  map.add(marker);
  marker.on('dragend', handleMarkerPosition);
}

function handleMarkerPosition(e: any): void {
  const lnglat = e.target.getPosition();
  updateLocation(lnglat.getLng(), lnglat.getLat());
}

async function handleMapClick(e: any): Promise<void> {
  const lng = e.lnglat.getLng();
  const lat = e.lnglat.getLat();
  addMarker(lng, lat);
  await updateLocation(lng, lat);
}

async function searchLocation(): Promise<void> {
  if (!isMapVisible.value) {
    isMapVisible.value = true;
    await initMap();
  }

  if (!map || !geocoder) {
    console.error('Map or geocoder is not initialized');
    return;
  }

  try {
    const result = await new Promise((resolve, reject) => {
      geocoder.getLocation(locationName.value, (status: string, result: any) => {
        if (status === 'complete' && result.info === 'OK') {
          resolve(result);
        } else {
          reject(new Error('地址查找失败'));
        }
      });
    });

    const lnglat = (result as any).geocodes[0].location;
    map.setCenter(lnglat);
    addMarker(lnglat.getLng(), lnglat.getLat());
    await updateLocation(lnglat.getLng(), lnglat.getLat(), (result as any).geocodes[0].formattedAddress);
  } catch (error) {
    console.error('Error searching location:', error);
    alert((error as Error).message);
  }
}

async function updateLocation(lng: number, lat: number, name: string = ''): Promise<void> {
  if (isUpdatingFromMap) return;
  isUpdatingFromMap = true;

  if (!name) {
    name = await reverseGeocode(lng, lat);
  }

  const location: Location = { name, lat, lng };
  selectedLocation.value = location;
  locationName.value = name;
  emit('update:modelValue', location);

  isUpdatingFromMap = false;
}

async function reverseGeocode(lng: number, lat: number): Promise<string> {
  if (!geocoder) return '未知地点';

  return new Promise((resolve) => {
    geocoder.getAddress([lng, lat], (status: string, result: any) => {
      if (status === 'complete' && result.info === 'OK') {
        resolve(result.regeocode.formattedAddress);
      } else {
        console.error('反向地理编码失败');
        resolve('未知地点');
      }
    });
  });
}

function clearLocation(): void {
  selectedLocation.value = null;
  locationName.value = '';
  emit('update:modelValue', null);
  if (marker) {
    map.remove(marker);
    marker = null;
  }
  isMapVisible.value = false;
}

async function toggleMap(): Promise<void> {
  isMapVisible.value = !isMapVisible.value;
  if (isMapVisible.value && !map) {
    await initMap();
  }
}

watch(() => props.modelValue, async (newValue: Location | null) => {
  if (isUpdatingFromMap) return;

  if (newValue) {
    locationName.value = newValue.name;
    selectedLocation.value = newValue;
    isMapVisible.value = true;
    await initMap();
    if (map) {
      addMarker(newValue.lng, newValue.lat);
      map.setCenter([newValue.lng, newValue.lat]);
      if (!newValue.name) {
        const name = await reverseGeocode(newValue.lng, newValue.lat);
        updateLocation(newValue.lng, newValue.lat, name);
      }
    }
  } else {
    clearLocation();
  }
}, { deep: true });
</script>

<style scoped>
.location-picker {
  width: 100%;
}
.map-container {
  width: 100%;
  height: 400px;
  margin-top: 10px;
}
</style>
