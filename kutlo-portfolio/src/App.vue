<template>
  <div class="min-h-screen bg-navy text-white">
    <AppNavbar />

    <!-- Main content area — padded for fixed navbar -->
    <main class="pt-16">
      <Transition name="view-fade" mode="out-in">
        <!-- Home view: smooth-scroll landing -->
        <div v-if="activeView === 'home'" key="home">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <ServicesSection @open-chatbot="openDevBot" />
          <ContactSection />
        </div>

        <!-- Resume view -->
        <div v-else-if="activeView === 'resume'" key="resume">
          <ResumeView />
        </div>

        <!-- Projects view -->
        <div v-else-if="activeView === 'projects'" key="projects">
          <ProjectsView />
        </div>

        <!-- Services view -->
        <div v-else-if="activeView === 'services'" key="services">
          <ServicesView />
        </div>
      </Transition>
    </main>

    <!-- DevBot modal -->
    <DevBotModal :is-open="isDevBotOpen" @close="closeDevBot" />
  </div>
</template>

<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ContactSection from './components/ContactSection.vue'
import DevBotModal from './components/DevBotModal.vue'
import ResumeView from './components/ResumeView.vue'
import ProjectsView from './components/ProjectsView.vue'
import ServicesView from './components/ServicesView.vue'
import { useNavigation } from './composables/useNavigation'

const { activeView, isDevBotOpen, openDevBot, closeDevBot } = useNavigation()
</script>

<style scoped>
.view-fade-enter-active,
.view-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.view-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.view-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
