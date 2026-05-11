<template>
  <section id="projects" class="min-h-screen py-20 px-4 bg-navy">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-12">
        Featured <span class="text-electric-blue">Projects</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projects"
          :key="project.name"
          class="bg-navy-light rounded-xl p-6 border border-electric-blue/20 flex flex-col gap-4 hover:border-electric-blue/50 transition-colors"
        >
          <h3 class="text-white font-bold text-xl">{{ project.name }}</h3>

          <p class="text-muted text-sm leading-relaxed flex-1">{{ project.description }}</p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="badge border-0 bg-electric-blue/20 text-electric-blue-light font-medium px-3 py-3 text-xs"
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
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '../data/projects'
</script>
