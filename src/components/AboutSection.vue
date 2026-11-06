<template>
  <section
    id="about"
    class="min-h-screen py-20 px-4 bg-navy flex items-center"
  >
    <div class="max-w-5xl mx-auto w-full">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-12">
        About <span class="text-electric-blue">Me</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <!-- Personal details -->
        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <span class="text-electric-blue text-xl">📍</span>
            <div>
              <p class="text-muted text-sm uppercase tracking-widest">Location</p>
              <p class="text-white font-medium">Cape Town, South Africa</p>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-electric-blue text-xl">🌍</span>
            <div>
              <p class="text-muted text-sm uppercase tracking-widest">Nationality</p>
              <p class="text-white font-medium">South African</p>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-electric-blue text-xl">💼</span>
            <div>
              <p class="text-muted text-sm uppercase tracking-widest">Role</p>
              <p class="text-white font-medium">Full Stack Developer</p>
            </div>
          </div>
        </div>

        <!-- Personal summary -->
        <div class="bg-navy-light rounded-xl p-6 border border-electric-blue/20">
          <p class="text-white leading-relaxed mb-4">
            I'm a Full Stack Developer with a passion for crafting clean, performant web
            applications and automated business systems. I hold an ICT Diploma in Multimedia
            Applications from CPUT and am currently completing my Advanced Diploma.
          </p>
          <p class="text-muted leading-relaxed">
            From building logistics platforms to responsive marketing sites, I enjoy turning
            complex problems into elegant digital solutions. When I'm not coding, I'm exploring
            new technologies and sharpening my skills in UI/UX design.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
