<template>
  <section id="education" class="min-h-screen py-20 px-4 bg-navy">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-12">
        <span class="text-electric-blue">Education</span> &amp; Certifications
      </h2>

      <!-- Qualifications (reverse chronological — data already ordered) -->
      <div class="space-y-6 mb-16">
        <div
          v-for="(entry, index) in education"
          :key="index"
          class="bg-navy-light rounded-xl border border-electric-blue/20 hover:border-electric-blue/50 transition-colors duration-300 overflow-hidden"
        >
          <!-- Entry header -->
          <div class="p-6">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <div>
                <h3 class="text-lg font-bold text-white">{{ entry.qualification }}</h3>
                <p class="text-electric-blue font-semibold text-sm">{{ entry.institution }}</p>
              </div>
              <span class="text-muted text-sm whitespace-nowrap mt-1 sm:mt-0">{{ entry.period }}</span>
            </div>

            <p v-if="entry.description" class="text-muted text-sm leading-relaxed mt-2">
              {{ entry.description }}
            </p>
          </div>

          <!-- Expandable module years (DaisyUI collapse) -->
          <div v-if="entry.modules && entry.modules.length" class="border-t border-electric-blue/10 px-6 pb-4">
            <p class="text-muted text-xs uppercase tracking-widest mt-4 mb-3">Modules by Year</p>
            <div class="space-y-2">
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
      </div>

      <!-- Certifications subsection -->
      <div>
        <h3 class="text-xl font-bold text-white mb-6">
          <span class="text-electric-blue">Certifications</span>
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="(cert, index) in certifications"
            :key="index"
            class="bg-navy-light rounded-xl p-5 border border-electric-blue/20 hover:border-electric-blue/50 transition-colors duration-300 flex items-start gap-4"
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
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { education, certifications } from '../data/education'
</script>
