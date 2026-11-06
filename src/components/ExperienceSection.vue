<template>
  <section id="experience" class="min-h-screen py-20 px-4 bg-navy">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-12">
        Work <span class="text-electric-blue">Experience</span>
      </h2>

      <!-- Vertical timeline -->
      <div class="relative">
        <!-- Timeline spine -->
        <div class="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-electric-blue/30"></div>

        <div class="space-y-12">
          <div
            v-for="(entry, index) in experience"
            :key="index"
            class="relative pl-12 md:pl-20"
          >
            <!-- Timeline dot -->
            <div
              class="absolute left-2 md:left-6 top-1.5 w-5 h-5 rounded-full bg-electric-blue border-4 border-navy shadow-lg shadow-electric-blue/40"
            ></div>

            <!-- Card -->
            <div class="bg-navy-light rounded-xl p-6 border border-electric-blue/20 hover:border-electric-blue/50 transition-colors duration-300">
              <!-- Header -->
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                <div>
                  <h3 class="text-xl font-bold text-white">{{ entry.title }}</h3>
                  <p class="text-electric-blue font-semibold">{{ entry.company }}</p>
                </div>
                <span class="text-muted text-sm whitespace-nowrap mt-1 sm:mt-0">{{ entry.period }}</span>
              </div>

              <!-- Description -->
              <p class="text-muted text-sm leading-relaxed mb-4">{{ entry.description }}</p>

              <!-- Highlights -->
              <ul class="space-y-2">
                <li
                  v-for="(highlight, hIndex) in entry.highlights"
                  :key="hIndex"
                  class="flex items-start gap-2 text-sm"
                >
                  <span class="text-electric-blue mt-1 shrink-0">▸</span>
                  <!-- Render quantified highlights (containing % or digits) in electric-blue bold -->
                  <span v-if="isQuantified(highlight)" class="text-electric-blue-light font-bold">
                    {{ highlight }}
                  </span>
                  <span v-else class="text-white/80">{{ highlight }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experience } from '../data/experience'

function isQuantified(text: string): boolean {
  return /%|\d/.test(text)
}
</script>
