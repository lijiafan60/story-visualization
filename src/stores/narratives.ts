
import { defineStore } from 'pinia'
import { Narrative, Event, type Entity } from '@/mock/types'
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
      if (this.narratives.length === 0) {
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
        } else {
          console.error("updateEventInNarrative: eventIndex == -1")
        }
      }
    },
    saveEventToNarrative(narrativeId: string, event: Event) {
      if (event.id) {
        console.log("update event", event)
        this.updateEventInNarrative(narrativeId, event)
      } else {
        const narrative = this.narratives.find(n => n.id === narrativeId)
        if (narrative) {
          event.id = (narrative.events?.length ?? 1).toString()
          console.log("new event", event)
          this.addEventToNarrative(narrativeId, event)
        }
      }
    },
    addEntityToNarrative(narrativeId: string, entity: Entity) {
      const narrative = this.narratives.find(n => n.id === narrativeId)
      if (narrative) {
        if (!narrative.entities) {
          narrative.entities = []
        }
        narrative.entities.push(entity)
      }
    },
    updateEntityInNarrative(narrativeId: string, updatedEntity: Entity) {
      const narrative = this.narratives.find(n => n.id === narrativeId)
      if (narrative && narrative.entities) {
        const entityIndex = narrative.entities.findIndex(e => e.id === updatedEntity.id)
        if (entityIndex !== -1) {
          narrative.entities[entityIndex] = updatedEntity
        } else {
          console.error("updateEntityInNarrative: eventIndex == -1")
        }
      }
    },
    saveEntityToNarrative(narrativeId: string, entity: Entity) {
      if (entity.id) {
        console.log("update entity", entity)
        this.updateEntityInNarrative(narrativeId, entity)
      } else {
        const narrative = this.narratives.find(n => n.id === narrativeId)
        if (narrative) {
          entity.id = (narrative.events?.length ?? 1).toString()
          console.log("new entity", entity)
          this.addEntityToNarrative(narrativeId, entity)
        }
      }
    },
    // 新增：重置数据到初始状态
    resetToMockData() {
      this.narratives = mockNarratives
    }
  },
  persist: {
    key: 'narratives-store',
    storage: localStorage,
  },
})
