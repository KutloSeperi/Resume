import { ref } from 'vue'

export type NavView = 'home' | 'resume' | 'projects' | 'services'

const activeView = ref<NavView>('home')
const isDevBotOpen = ref(false)

function setView(view: NavView): void {
  activeView.value = view
}

function openDevBot(): void {
  isDevBotOpen.value = true
}

function closeDevBot(): void {
  isDevBotOpen.value = false
}

export function useNavigation() {
  return {
    activeView,
    isDevBotOpen,
    setView,
    openDevBot,
    closeDevBot
  }
}
