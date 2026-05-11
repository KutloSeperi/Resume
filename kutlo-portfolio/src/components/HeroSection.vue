<template>
  <section
    id="hero"
    class="min-h-screen bg-navy flex items-center justify-center px-4 py-20"
  >
    <div class="max-w-3xl mx-auto text-center">
      <!-- Name -->
      <h1 class="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
        Kutlo
        <span class="text-electric-blue">Seperi</span>
      </h1>

      <!-- Title -->
      <p class="text-xl md:text-2xl font-medium text-electric-blue-light mb-6 tracking-wide">
        Full Stack Developer
      </p>

      <!-- Career objective -->
      <p class="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
        Passionate about building clean, performant web applications and automated systems.
        Based in Cape Town, South Africa — turning ideas into polished digital products
        with Vue, Laravel, and everything in between.
      </p>

      <!-- CTA buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#services"
          @click.prevent="scrollToSection('services')"
          class="btn bg-electric-blue hover:bg-electric-blue-light text-white border-none px-8 py-3 text-base font-semibold rounded-lg transition-colors duration-200"
        >
          Hire Me
        </a>
        <a
          href="#projects"
          @click.prevent="scrollToSection('projects')"
          class="btn btn-outline border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-3 text-base font-semibold rounded-lg transition-colors duration-200"
        >
          View My Work
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function scrollToSection(id: string): void {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
