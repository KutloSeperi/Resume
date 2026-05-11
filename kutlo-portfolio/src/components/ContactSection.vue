<template>
  <section id="contact" class="min-h-screen py-20 px-4 bg-navy">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-12">
        Get In <span class="text-electric-blue">Touch</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact details -->
        <div class="flex flex-col gap-6">
          <p class="text-muted leading-relaxed">
            Have a project in mind or want to discuss opportunities? Reach out directly or use the form.
          </p>
          <div class="flex flex-col gap-4">
            <a
              href="mailto:kutlocoopseperi@gmail.com"
              class="flex items-center gap-3 text-electric-blue hover:text-electric-blue-light transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              kutlocoopseperi@gmail.com
            </a>
            <a
              href="tel:0627857296"
              class="flex items-center gap-3 text-electric-blue hover:text-electric-blue-light transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              062 785 7296
            </a>
          </div>
        </div>

        <!-- Contact form -->
        <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
          <div class="form-control">
            <label class="label">
              <span class="label-text text-white">Name</span>
            </label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Your name"
              class="input input-bordered bg-navy-light border-electric-blue/30 text-white placeholder-muted focus:border-electric-blue"
            />
            <span v-if="errors.name" class="label-text-alt text-red-400 mt-1">{{ errors.name }}</span>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text text-white">Email</span>
            </label>
            <input
              v-model="form.email"
              type="email"
              placeholder="your@email.com"
              class="input input-bordered bg-navy-light border-electric-blue/30 text-white placeholder-muted focus:border-electric-blue"
            />
            <span v-if="errors.email" class="label-text-alt text-red-400 mt-1">{{ errors.email }}</span>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text text-white">Message</span>
            </label>
            <textarea
              v-model="form.message"
              placeholder="Tell me about your project..."
              rows="5"
              class="textarea textarea-bordered bg-navy-light border-electric-blue/30 text-white placeholder-muted focus:border-electric-blue resize-none"
            ></textarea>
            <span v-if="errors.message" class="label-text-alt text-red-400 mt-1">{{ errors.message }}</span>
          </div>

          <div v-if="submitted" class="alert bg-electric-blue/20 border border-electric-blue/40 text-white text-sm">
            Thanks! Your message has been received. I'll be in touch soon.
          </div>

          <button
            type="submit"
            class="btn bg-electric-blue hover:bg-electric-blue-light border-0 text-white font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { validateContactForm, isFormValid } from '../utils/validateContactForm'

const form = reactive({ name: '', email: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const submitted = ref(false)

function handleSubmit() {
  const result = validateContactForm(form)
  errors.name = result.name
  errors.email = result.email
  errors.message = result.message

  if (isFormValid(result)) {
    submitted.value = true
    form.name = ''
    form.email = ''
    form.message = ''
  }
}
</script>
