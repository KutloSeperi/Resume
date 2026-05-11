<template>
  <div class="min-h-screen py-20 px-4 bg-navy">
    <div class="max-w-5xl mx-auto">

      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl font-bold text-white">
          Services &amp; <span class="text-electric-blue">Pricing</span>
        </h1>
        <p class="text-muted mt-3 text-lg max-w-2xl">
          From simple landing pages to fully automated business systems — here's what Kutlo can build for you.
        </p>
      </div>

      <!-- Service cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div
          v-for="(tier, index) in services"
          :key="tier.name"
          class="card bg-navy-light border border-electric-blue/20 hover:border-electric-blue/60 transition-colors duration-300 flex flex-col"
          :class="{ 'border-electric-blue/60 shadow-lg shadow-electric-blue/10': index === 1 }"
        >
          <div class="card-body flex flex-col gap-5 p-8">
            <!-- Popular badge for middle tier -->
            <div v-if="index === 1" class="self-start">
              <span class="badge bg-electric-blue border-0 text-white text-xs font-semibold px-3 py-2">Most Popular</span>
            </div>

            <div>
              <h2 class="card-title text-white text-xl mb-1">{{ tier.name }}</h2>
              <p class="text-4xl font-bold text-electric-blue">{{ tier.price }}</p>
              <p v-if="tier.note" class="text-electric-blue-light text-xs mt-1 italic">{{ tier.note }}</p>
            </div>

            <p class="text-muted text-sm leading-relaxed flex-1">{{ tier.description }}</p>

            <!-- What's included -->
            <ul class="space-y-2 text-sm">
              <li
                v-for="(feature, fIndex) in tierFeatures[index]"
                :key="fIndex"
                class="flex items-start gap-2 text-white/80"
              >
                <span class="text-electric-blue mt-0.5 shrink-0">✓</span>
                {{ feature }}
              </li>
            </ul>

            <div class="card-actions mt-auto pt-2">
              <button
                class="btn w-full border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white transition-colors"
                :class="index === 1 ? 'btn-primary bg-electric-blue text-white' : 'btn-outline'"
                @click="openDevBot()"
              >
                Get a Quote via DevBot
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- How it works -->
      <div class="bg-navy-light rounded-2xl p-8 border border-electric-blue/20">
        <h2 class="text-2xl font-bold text-white mb-6">How it <span class="text-electric-blue">works</span></h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div v-for="(step, index) in steps" :key="index" class="flex flex-col gap-3">
            <div class="w-10 h-10 rounded-full bg-electric-blue/10 border border-electric-blue/30 flex items-center justify-center text-electric-blue font-bold text-lg">
              {{ index + 1 }}
            </div>
            <h3 class="text-white font-semibold">{{ step.title }}</h3>
            <p class="text-muted text-sm leading-relaxed">{{ step.description }}</p>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-electric-blue/10 flex flex-col sm:flex-row sm:items-center gap-4">
          <p class="text-muted text-sm flex-1">Ready to get started? Chat with DevBot to describe your project and get an instant estimate.</p>
          <button
            class="btn btn-primary bg-electric-blue border-electric-blue text-white hover:bg-electric-blue-light hover:border-electric-blue-light whitespace-nowrap"
            @click="openDevBot()"
          >
            Chat with DevBot
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { services } from '../data/services'
import { useNavigation } from '../composables/useNavigation'

const { openDevBot } = useNavigation()

const tierFeatures: string[][] = [
  [
    'Up to 5 pages',
    'Mobile responsive design',
    'Contact form',
    '3 months free hosting',
    'Basic SEO setup'
  ],
  [
    'Unlimited pages',
    'Custom UI/UX design',
    'Advanced functionality',
    'CMS integration',
    'Performance optimisation'
  ],
  [
    'Custom workflow automation',
    'Database design & integration',
    'API development',
    'Admin dashboard',
    'Ongoing support & maintenance'
  ]
]

const steps = [
  {
    title: 'Describe your project',
    description: 'Chat with DevBot or send an email explaining what you need — no technical jargon required.'
  },
  {
    title: 'Get a tailored quote',
    description: 'Kutlo reviews your requirements and provides a detailed proposal with timeline and pricing.'
  },
  {
    title: 'Build & launch',
    description: 'Development begins, with regular updates and a final review before going live.'
  }
]
</script>
