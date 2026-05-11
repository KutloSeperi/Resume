<template>
  <section id="services" class="min-h-screen py-20 px-4 bg-navy">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-12">
        My <span class="text-electric-blue">Services</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="tier in services"
          :key="tier.name"
          class="card bg-navy-light border border-electric-blue/20 hover:border-electric-blue/50 transition-colors flex flex-col"
        >
          <div class="card-body flex flex-col gap-4">
            <h3 class="card-title text-white text-xl">{{ tier.name }}</h3>

            <p class="text-3xl font-bold text-electric-blue">{{ tier.price }}</p>

            <p class="text-muted text-sm leading-relaxed flex-1">{{ tier.description }}</p>

            <p v-if="tier.note" class="text-electric-blue-light text-xs italic">
              {{ tier.note }}
            </p>

            <div class="card-actions mt-auto">
              <button
                class="btn btn-outline border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white w-full"
                @click="emit('open-chatbot')"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { services } from '../data/services'

const emit = defineEmits<{
  'open-chatbot': []
}>()
</script>
