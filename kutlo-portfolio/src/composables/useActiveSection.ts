import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useNavigation } from './useNavigation'

export type SectionId = 'hero' | 'about' | 'skills' | 'experience' | 'education' | 'projects' | 'services' | 'contact'

const SECTION_IDS: SectionId[] = ['hero', 'about', 'skills', 'experience', 'education', 'projects', 'services', 'contact']

export function useActiveSection() {
  const { activeView } = useNavigation()
  const activeSection = ref<SectionId>('hero')
  let observer: IntersectionObserver | null = null

  function startObserving() {
    if (observer) return

    observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio that is intersecting
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          activeSection.value = visible[0].target.id as SectionId
        }
      },
      { threshold: 0.3 }
    )

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer!.observe(el)
    })
  }

  function stopObserving() {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  onMounted(() => {
    if (activeView.value === 'home') {
      startObserving()
    }
  })

  onUnmounted(() => {
    stopObserving()
  })

  // Start/stop observer based on active view
  watch(activeView, (view) => {
    if (view === 'home') {
      // Small delay to allow DOM to render sections
      setTimeout(startObserving, 100)
    } else {
      stopObserving()
      activeSection.value = 'hero'
    }
  })

  return {
    activeSection,
    SECTION_IDS
  }
}
