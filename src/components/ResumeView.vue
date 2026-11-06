<template>
  <div class="min-h-screen py-20 px-4 bg-navy">
    <div class="max-w-4xl mx-auto">

      <!-- Header -->
      <div class="mb-12 pb-8 border-b border-electric-blue/20">
        <h1 class="text-4xl font-bold text-white">Kutlo <span class="text-electric-blue">Seperi</span></h1>
        <p class="text-electric-blue-light text-lg mt-1">Full Stack Developer</p>
        <p class="text-muted text-sm mt-2">Cape Town, South Africa · kutlocoopseperi@gmail.com · 062 785 7296</p>
      </div>

      <!-- Experience -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span class="w-8 h-0.5 bg-electric-blue inline-block"></span>
          Work Experience
        </h2>
        <div class="space-y-8">
          <div v-for="(entry, index) in experience" :key="index" class="pl-4 border-l-2 border-electric-blue/30">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <div>
                <h3 class="text-white font-bold text-lg">{{ entry.title }}</h3>
                <p class="text-electric-blue font-semibold text-sm">{{ entry.company }}</p>
              </div>
              <span class="text-muted text-sm whitespace-nowrap">{{ entry.period }}</span>
            </div>
            <p class="text-muted text-sm leading-relaxed mb-3">{{ entry.description }}</p>
            <ul class="space-y-1">
              <li
                v-for="(highlight, hIndex) in entry.highlights"
                :key="hIndex"
                class="flex items-start gap-2 text-sm"
              >
                <span class="text-electric-blue mt-1 shrink-0">▸</span>
                <span :class="isQuantified(highlight) ? 'text-electric-blue-light font-bold' : 'text-white/80'">
                  {{ highlight }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Education -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span class="w-8 h-0.5 bg-electric-blue inline-block"></span>
          Education
        </h2>
        <div class="space-y-6">
          <div
            v-for="(entry, index) in education"
            :key="index"
            class="pl-4 border-l-2 border-electric-blue/30"
          >
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
              <div>
                <h3 class="text-white font-bold">{{ entry.qualification }}</h3>
                <p class="text-electric-blue text-sm font-semibold">{{ entry.institution }}</p>
              </div>
              <span class="text-muted text-sm whitespace-nowrap">{{ entry.period }}</span>
            </div>
            <p v-if="entry.description" class="text-muted text-sm leading-relaxed mt-1">
              {{ entry.description }}
            </p>
            <!-- Expandable modules -->
            <div v-if="entry.modules && entry.modules.length" class="mt-3 space-y-2">
              <div
                v-for="(moduleYear, mIndex) in entry.modules"
                :key="mIndex"
                class="collapse collapse-arrow bg-navy border border-electric-blue/10 rounded-lg"
              >
                <input type="checkbox" />
                <div class="collapse-title text-sm font-semibold text-white flex items-center gap-2 py-3 min-h-0">
                  <span class="text-electric-blue">{{ moduleYear.year }}</span>
                  <span class="text-muted font-normal">— {{ moduleYear.period }}</span>
                </div>
                <div class="collapse-content">
                  <ul class="space-y-1 pt-1">
                    <li
                      v-for="(item, iIndex) in moduleYear.items"
                      :key="iIndex"
                      class="flex items-start gap-2 text-sm text-white/80"
                    >
                      <span class="text-electric-blue mt-1 shrink-0 text-xs">▸</span>
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span class="w-8 h-0.5 bg-electric-blue inline-block"></span>
          Skills
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div v-for="category in skillCategories" :key="category.name">
            <h3 class="text-electric-blue font-semibold text-sm uppercase tracking-widest mb-3">
              {{ category.name }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in category.skills"
                :key="skill"
                class="badge border-0 bg-electric-blue/20 text-electric-blue-light font-medium px-3 py-3 text-xs"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Certifications -->
      <section>
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span class="w-8 h-0.5 bg-electric-blue inline-block"></span>
          Certifications
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="(cert, index) in certifications"
            :key="index"
            class="bg-navy-light rounded-xl p-5 border border-electric-blue/20 flex items-start gap-4"
          >
            <div class="w-10 h-10 rounded-full bg-electric-blue/10 border border-electric-blue/30 flex items-center justify-center shrink-0">
              <span class="text-electric-blue text-lg">🎓</span>
            </div>
            <div>
              <p class="text-white font-semibold text-sm">{{ cert.name }}</p>
              <p class="text-electric-blue text-xs mt-0.5">{{ cert.provider }}</p>
              <p class="text-muted text-xs mt-0.5">{{ cert.date }}</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import { experience } from '../data/experience'
import { education, certifications } from '../data/education'
import { skillCategories } from '../data/skills'

function isQuantified(text: string): boolean {
  return /%|\d/.test(text)
}
</script>
