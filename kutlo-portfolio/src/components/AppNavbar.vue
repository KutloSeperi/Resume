<template>
  <!-- Desktop & Mobile Navbar -->
  <nav class="fixed top-0 left-0 right-0 z-50 bg-navy-light border-b border-electric-blue/20 shadow-lg">
    <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

      <!-- Logo / Home link -->
      <button
        @click="setView('home')"
        class="text-white font-bold text-lg tracking-wide hover:text-electric-blue transition-colors"
      >
        KS<span class="text-electric-blue">.</span>
      </button>

      <!-- Desktop nav items -->
      <div class="hidden md:flex items-center gap-1">
        <button
          v-for="tab in tabItems"
          :key="tab.view"
          @click="handleTabClick(tab)"
          :class="[
            'px-4 py-2 rounded text-sm font-medium transition-all duration-200',
            tab.view === 'devbot'
              ? 'bg-electric-blue text-white hover:bg-electric-blue-light'
              : isActiveTab(tab.view as NavView)
                ? 'text-electric-blue border-b-2 border-electric-blue'
                : 'text-muted hover:text-white'
          ]"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Mobile hamburger -->
      <div class="md:hidden">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-sm text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabindex="0" class="dropdown-content menu bg-navy-light border border-electric-blue/20 rounded-box w-48 mt-2 p-2 shadow-xl z-50">
            <li v-for="tab in tabItems" :key="tab.view">
              <button
                @click="handleTabClick(tab)"
                :class="[
                  'w-full text-left px-3 py-2 rounded text-sm font-medium transition-colors',
                  tab.view === 'devbot'
                    ? 'text-electric-blue font-semibold'
                    : isActiveTab(tab.view as NavView)
                      ? 'text-electric-blue'
                      : 'text-muted hover:text-white'
                ]"
              >
                {{ tab.label }}
              </button>
            </li>
          </ul>
        </div>
      </div>

    </div>

    <!-- 🚧 Marquee / Scrolling ticker banner -->
    <div class="overflow-hidden bg-electric-blue/10 border-t border-electric-blue/20 py-1">
      <div class="marquee-track flex whitespace-nowrap">
        <span
          v-for="n in 12"
          :key="n"
          class="text-electric-blue text-xs font-semibold tracking-widest uppercase mx-8"
        >
          🚧 Under Construction
        </span>
      </div>
    </div>

  </nav>
</template>

<script setup lang="ts">
import { useNavigation, type NavView } from '../composables/useNavigation'

const { activeView, setView, openDevBot } = useNavigation()

const tabItems = [
  { label: 'Resume',   view: 'resume' },
  { label: 'Projects', view: 'projects' },
  { label: 'Services', view: 'services' },
  { label: 'DevBot',   view: 'devbot' },
]

function isActiveTab(view: NavView): boolean {
  return activeView.value === view
}

function handleTabClick(tab: { label: string; view: string }) {
  if (tab.view === 'devbot') {
    openDevBot()
  } else {
    setView(tab.view as NavView)
  }
}
</script>

<style scoped>
.marquee-track {
  animation: marquee 20s linear infinite;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
</style>