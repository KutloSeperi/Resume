<template>
  <section id="skills" class="min-h-screen py-20 px-4 bg-navy-light">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-12">
        Technical <span class="text-electric-blue">Skills</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="category in skillCategories"
          :key="category.name"
          class="bg-navy rounded-xl p-6 border border-electric-blue/20"
        >
          <h3 class="text-electric-blue font-semibold text-lg mb-4 uppercase tracking-widest">
            {{ category.name }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="badge border-0 bg-electric-blue/20 text-electric-blue-light font-medium px-3 py-3 text-sm"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skillCategories } from '../data/skills'
</script>
