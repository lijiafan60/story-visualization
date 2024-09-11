import { useRouter } from 'vue-router'

export function useNavigation() {
  const router = useRouter()

  const goToHome = () => {
    router.push('/')
  }

  const goToNarrative = (id: string) => {
    router.push(`/narrative/${id}`)
  }
  const goToStoryMap = (id: string) => {
    router.push(`/narrative/${id}/map`)
  }

  const goToTimeline = (id: string) => {
    router.push({ name: "NarrativeTimeline", params: { id: id } });
  }

  const goBack = () => {
    router.back()
  }

  // 添加更多导航方法...

  return {
    goToHome,
    goToNarrative,
    goToStoryMap,
    goToTimeline,
    goBack,
    // 返回其他导航方法...
  }
}
