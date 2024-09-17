
import { defineStore } from 'pinia'
import { Narrative, Event } from '@/mock/types'
import { mockNarratives } from '@/mock/narratives' // 导入mock数据

// 模拟API服务
const api = {
  async getNarratives(): Promise<Narrative[]> {
    // 模拟API延迟
    await new Promise(resolve => setTimeout(resolve, 100))
    return mockNarratives
  }
}

export const useNarrativesStore = defineStore('narratives', {
  state: () => ({
    narratives: [] as Narrative[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchNarratives() {
      this.loading = true
      this.error = null
      try {
        this.narratives = await api.getNarratives()
      } catch (err) {
        this.error = 'Failed to fetch narratives'
        console.error(err)
      } finally {
        this.loading = false
      }
    },
    addNarrative(narrative: Narrative) {
      this.narratives.push(narrative)
    },
    updateNarrative(updatedNarrative: Narrative) {
      const index = this.narratives.findIndex(n => n.id === updatedNarrative.id)
      if (index !== -1) {
        this.narratives[index] = updatedNarrative
      }
    },
    saveNarrative(narrative: Narrative) {
      if (narrative.id) {
        this.updateNarrative(narrative)
      } else {
        narrative.id = this.narratives.length + 1
        this.addNarrative(narrative)
      }
    },
    addEventToNarrative(narrativeId: string, event: Event) {
      const narrative = this.narratives.find(n => n.id === narrativeId)
      if (narrative) {
        if (!narrative.events) {
          narrative.events = []
        }
        narrative.events.push(event)
      }
    },
    updateEventInNarrative(narrativeId: string, updatedEvent: Event) {
      const narrative = this.narratives.find(n => n.id === narrativeId)
      if (narrative && narrative.events) {
        const eventIndex = narrative.events.findIndex(e => e.id === updatedEvent.id)
        if (eventIndex !== -1) {
          narrative.events[eventIndex] = updatedEvent
        }
      }
    },
    saveEventToNarrative(narrativeId: string, event: Event) {
      if (event.id) {
        this.updateEventInNarrative(narrativeId, event)
      } else {
        event.id = Date.now().toString()
        this.addEventToNarrative(narrativeId, event)
      }
    }
  }
})
