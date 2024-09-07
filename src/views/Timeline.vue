<template>  
  <div id="timeline-embed" style="width: 100%; height: 600px;"></div>  
</template>  

<script lang="ts" setup>  
import { onMounted } from 'vue';  

// 引入TimelineJS的CSS和JS  
const loadTimelineJS = () => {  
  const link = document.createElement('link');  
  link.rel = 'stylesheet';  
  link.href = 'https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css';  
  document.head.appendChild(link);  

  const script = document.createElement('script');  
  script.src = 'https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js';  
  document.body.appendChild(script);  
};  

const timelineData = {  
  title: {  
    text: {  
      headline: "My Timeline",  
      text: "<p>A brief description of my timeline.</p>"  
    }  
  },  
  events: [  
    {  
      start_date: {  
        year: "2023",  
        month: "10",  
        day: "1"  
      },  
      text: {  
        headline: "Event 1",  
        text: "<p>Details about event 1.</p>"  
      }  
    },  
    {  
      start_date: {  
        year: "2023",  
        month: "11",  
        day: "15"  
      },  
      text: {  
        headline: "Event 2",  
        text: "<p>Details about event 2.</p>"  
      }  
    }  
  ]  
};  

onMounted(() => {  
  loadTimelineJS();  
  const interval = setInterval(() => {  
    if (window.TL) {  
      clearInterval(interval);  
      new window.TL.Timeline('timeline-embed', timelineData);  
    }  
  }, 100);  
});  
</script>  

<style scoped>  
#timeline-embed {  
  margin: 20px 0;  
}  
</style>