<template>
  <div class="min-h-screen py-20 px-4 bg-navy">
    <div class="max-w-5xl mx-auto">

      <div class="mb-12">
        <h1 class="text-4xl font-bold text-white">
          My <span class="text-electric-blue">Projects</span>
        </h1>
        <p class="text-muted mt-3 text-lg">A showcase of work built across different industries and tech stacks.</p>
      </div>

      <!-- Tag filter -->
      <div class="flex flex-wrap gap-2 mb-10">
        <button
          class="badge px-4 py-3 text-sm font-medium border-0 cursor-pointer transition-colors"
          :class="activeTag === null
            ? 'bg-electric-blue text-white'
            : 'bg-electric-blue/20 text-electric-blue-light hover:bg-electric-blue/30'"
          @click="activeTag = null"
        >
          All
        </button>
        <button
          v-for="tag in allTags"
          :key="tag"
          class="badge px-4 py-3 text-sm font-medium border-0 cursor-pointer transition-colors"
          :class="activeTag === tag
            ? 'bg-electric-blue text-white'
            : 'bg-electric-blue/20 text-electric-blue-light hover:bg-electric-blue/30'"
          @click="activeTag = tag"
        >
          {{ tag }}
        </button>
      </div>

      <!-- Project grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.name"
          class="bg-navy-light rounded-xl p-8 border border-electric-blue/20 flex flex-col gap-5 hover:border-electric-blue/50 transition-colors duration-300"
        >
          <h2 class="text-white font-bold text-xl">{{ project.name }}</h2>

          <p class="text-muted text-sm leading-relaxed flex-1">{{ project.description }}</p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="badge border-0 text-xs font-medium px-3 py-3 cursor-pointer transition-colors"
              :class="activeTag === tag
                ? 'bg-electric-blue text-white'
                : 'bg-electric-blue/20 text-electric-blue-light hover:bg-electric-blue/30'"
              @click="activeTag = tag"
            >
              {{ tag }}
            </span>
          </div>

          <a
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-electric-blue hover:text-electric-blue-light font-medium text-sm transition-colors mt-auto"
          >
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Empty state -->
      <div v-if="filteredProjects.length === 0" class="text-center py-20">
        <p class="text-muted text-lg">No projects match the selected tag.</p>
        <button class="mt-4 text-electric-blue hover:text-electric-blue-light text-sm" @click="activeTag = null">
          Clear filter
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '../data/projects'

const activeTag = ref<string | null>(null)

const allTags = computed(() => {
  const tags = new Set<string>()
  projects.forEach(p => p.tags.forEach(t => tags.add(t)))
  return Array.from(tags).sort()
})

const filteredProjects = computed(() =>
  activeTag.value === null
    ? projects
    : projects.filter(p => p.tags.includes(activeTag.value!))
)
</script>
