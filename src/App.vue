<script setup>
import { ref } from 'vue'
import SiteNav from './components/SiteNav.vue'
import MobileMenu from './components/MobileMenu.vue'
import SectionBlock from './components/SectionBlock.vue'
import { useDarkMode } from './composables/useDarkMode'
import { useScrollReveal } from './composables/useScrollReveal'
import { experience, earlierExperience, skills, projects, education } from './data'

const { dark, toggle } = useDarkMode()
const menuOpen = ref(false)

function setMenu(open) {
  menuOpen.value = open
  document.body.style.overflow = open ? 'hidden' : ''
}

useScrollReveal()

const stats = [
  { value: '7', label: 'Companies' },
  { value: '10+', label: 'API integrations' },
  { value: '5+', label: 'Years experience' },
]

const contactLinks = [
  { href: 'https://wa.me/601116359489', label: 'WhatsApp · 011-1635 9489' },
  { href: 'https://www.linkedin.com/in/rex-you-2a4347194/', label: 'LinkedIn' },
  { href: 'https://rexyou.github.io', label: 'GitHub' },
]
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-paper font-sans text-ink transition-colors duration-250 dark:bg-night dark:text-white/95">
    <!-- Ambient orange glow, sits behind the nav and hero -->
    <div class="pointer-events-none absolute inset-x-0 top-0 z-0 h-[900px] overflow-hidden">
      <div class="animate-drift1 absolute -top-[220px] right-[60px] h-[520px] w-[520px] rounded-full blur-[12px]"
           style="background: radial-gradient(circle at 40% 40%, rgb(255 100 10 / 0.28), rgb(255 100 10 / 0) 68%)" />
      <div class="animate-drift2 absolute left-[-120px] top-[420px] h-[380px] w-[380px] rounded-full blur-[10px]"
           style="background: radial-gradient(circle at 60% 40%, rgb(255 160 60 / 0.20), rgb(255 160 60 / 0) 70%)" />
    </div>

    <SiteNav :dark="dark" @toggle-dark="toggle" @open-menu="setMenu(true)" />
    <MobileMenu :open="menuOpen" @close="setMenu(false)" />

    <!-- Hero -->
    <header class="safe-x relative z-10 mx-auto grid max-w-[1280px] grid-cols-[minmax(0,1fr)_380px] items-start gap-16 px-16 pb-24 pt-20 max-lg:grid-cols-1 max-lg:gap-9 max-lg:px-6 max-lg:pb-16 max-lg:pt-8">
      <div class="relative flex flex-col items-start gap-7">
        <div data-load style="animation: riseIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.05s forwards; opacity: 0"
             class="flex items-center gap-2.5 rounded-full border border-black/10 bg-paper px-[18px] py-2 text-sm font-semibold text-ink-soft dark:border-white/15 dark:bg-night dark:text-white/60">
          <span class="inline-block h-2 w-2 rounded-full bg-accent" />
          Backend Developer, 5+ years
        </div>

        <h1 data-load style="animation: riseIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s forwards; opacity: 0"
            class="m-0 max-w-[820px] font-display text-[76px] font-bold leading-[1.02] tracking-[-0.03em] max-lg:text-[40px]">
          Backend systems for gaming, mlm system and job platform.
        </h1>

        <p data-load style="animation: riseIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.25s forwards; opacity: 0"
           class="m-0 max-w-[560px] text-[19px] leading-[1.55] text-ink-soft dark:text-white/70 max-lg:text-[17px]">
            Backend developer with 5+ years of experience across PHP/Laravel and, more recently, Node.js/TypeScript. Currently building and maintaining a gaming platform that connects gaming, payment gateway, and SMS API systems, using Node.js, Express, TypeScript, MongoDB, and Redis.        
        </p>

        <div data-load style="animation: riseIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.35s forwards; opacity: 0"
             class="mt-2 flex gap-3.5">
          <a href="#projects" class="rounded-full bg-accent px-7 py-3.5 text-[15px] font-bold text-accentInk">View projects</a>
          <a href="mailto:rexyou0831@gmail.com" class="rounded-full border border-black/15 px-7 py-3.5 text-[15px] font-bold dark:border-white/25">Get in touch</a>
        </div>

        <div data-load style="animation: riseIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.45s forwards; opacity: 0"
             class="mt-12 flex w-full gap-14 border-t border-black/[0.08] pt-10 dark:border-white/10 max-lg:justify-between max-lg:gap-7">
          <div v-for="s in stats" :key="s.label">
            <div class="font-display text-[34px] font-bold">{{ s.value }}</div>
            <div class="mt-1 text-sm text-ink-soft dark:text-white/55">{{ s.label }}</div>
          </div>
        </div>
      </div>

      <!-- Monogram avatar. Swap the inner div for an <img> once you have a photo. -->
      <div data-load
           style="animation: riseIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s forwards, floaty 6s ease-in-out 1.1s infinite; opacity: 0"
           class="relative flex h-[380px] items-center justify-center max-lg:order-first max-lg:h-[260px]">
        <div class="animate-spinSlow absolute h-[340px] w-[340px] rounded-full border border-dashed border-black/15 dark:border-white/20 max-lg:h-[230px] max-lg:w-[230px]">
          <div class="absolute -top-[5px] left-1/2 h-2.5 w-2.5 rounded-full bg-accent" />
          <div class="absolute bottom-6 right-3.5 h-1.5 w-1.5 rounded-full bg-ink-soft dark:bg-white/50" />
        </div>
        <div class="absolute h-[250px] w-[250px] rounded-full border border-black/[0.08] dark:border-white/10 max-lg:h-[180px] max-lg:w-[180px]" />
        <div class="flex h-[200px] w-[200px] items-center justify-center rounded-full bg-gradient-to-br from-accent to-[#ff9448] font-display text-[64px] font-bold tracking-[-0.03em] text-accentInk shadow-[0_24px_60px_rgb(255_100_10_/_0.28)] max-lg:h-[140px] max-lg:w-[140px] max-lg:text-[44px]">
          RY
        </div>
      </div>
    </header>

    <!-- About -->
    <section id="about" class="safe-x relative z-10 mx-auto max-w-[1280px] border-t border-black/[0.08] px-16 pb-24 pt-16 dark:border-white/10 max-lg:px-6">
      <div data-anim class="grid grid-cols-[220px_1fr] gap-x-[60px] max-lg:grid-cols-1 max-lg:gap-5">
        <div class="font-display text-[15px] font-semibold uppercase tracking-[0.02em] text-ink-soft dark:text-white/55">About</div>
        <p class="m-0 max-w-[720px] text-2xl font-medium leading-[1.5] tracking-[-0.01em] max-lg:text-[19px]">
          Backend developer with 5+ years of experience across PHP/Laravel and, more recently, Node.js/TypeScript environments. Strong track record of resolving integration and performance issues independently.
        </p>
      </div>
    </section>

    <!-- Skills -->
    <SectionBlock id="skills" label="Skills">
      <div class="grid grid-cols-2 gap-x-10 gap-y-5 max-lg:grid-cols-1">
        <div v-for="s in skills" :key="s.group">
          <div class="mb-1.5 font-display text-[15px] font-bold">{{ s.group }}</div>
          <div class="text-[15px] leading-[1.5] text-ink-soft dark:text-white/60">{{ s.items }}</div>
        </div>
      </div>
    </SectionBlock>

    <!-- Experience -->
    <SectionBlock id="experience" label="Experience">
      <div class="flex flex-col">
        <div v-for="job in experience" :key="job.company"
             class="flex items-baseline justify-between gap-6 border-b border-black/[0.08] py-[26px] dark:border-white/10 max-lg:flex-col max-lg:items-start max-lg:gap-1.5">
          <div>
            <div class="font-display text-xl font-bold">{{ job.role }}</div>
            <div class="mt-1 text-base text-ink-soft dark:text-white/55">{{ job.company }}</div>
          </div>
          <div class="whitespace-nowrap text-sm font-semibold text-ink-softer dark:text-white/45">{{ job.dates }}</div>
        </div>

        <div v-for="job in earlierExperience" :key="job.company"
             class="flex items-baseline justify-between gap-6 border-b border-black/[0.08] py-3.5 dark:border-white/10 max-lg:flex-col max-lg:items-start max-lg:gap-1.5">
          <div>
            <span class="text-[15px] font-semibold">{{ job.role }}</span>
            <span class="text-[15px] text-ink-soft dark:text-white/55"> — {{ job.company }}</span>
          </div>
          <div class="whitespace-nowrap text-[13px] text-ink-softer dark:text-white/45">{{ job.dates }}</div>
        </div>
      </div>
    </SectionBlock>

    <!-- Projects -->
    <SectionBlock id="projects" label="Projects">
      <div class="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
        <div v-for="p in projects" :key="p.title"
             class="flex flex-col gap-3.5 rounded-[20px] border border-black/[0.08] bg-paper-card p-7 dark:border-white/10 dark:bg-night-card">
          <div class="flex h-10 w-10 items-center justify-center rounded-[10px] bg-accent/[0.16]">
            <div class="h-3.5 w-3.5 rounded bg-accent" />
          </div>
          <div class="font-display text-[19px] font-bold">{{ p.title }}</div>
          <div class="text-[15px] leading-[1.5] text-ink-soft dark:text-white/60">{{ p.role }}</div>
        </div>
      </div>
    </SectionBlock>

    <!-- Education -->
    <SectionBlock id="education" label="Education">
      <div class="flex flex-col">
        <div v-for="ed in education" :key="ed.school"
             class="flex items-baseline justify-between gap-6 border-b border-black/[0.08] py-[18px] dark:border-white/10 max-lg:flex-col max-lg:items-start max-lg:gap-1.5">
          <div>
            <div class="text-base font-bold">{{ ed.degree }}</div>
            <div class="mt-0.5 text-[15px] text-ink-soft dark:text-white/55">{{ ed.school }}</div>
          </div>
          <div class="whitespace-nowrap text-[13px] text-ink-softer dark:text-white/45">{{ ed.dates }}</div>
        </div>
      </div>
    </SectionBlock>

    <!-- Contact -->
    <section id="contact" class="safe-x relative z-10 mx-auto max-w-[1280px] border-t border-black/[0.08] px-16 pb-32 pt-16 dark:border-white/10 max-lg:px-6">
      <div data-anim class="flex flex-col items-start gap-6 rounded-[28px] bg-ink px-16 py-[72px] dark:bg-night-deep max-lg:px-6 max-lg:py-10">
        <h2 class="m-0 font-display text-[42px] font-bold tracking-[-0.02em] text-paper max-lg:text-[30px]">Let's build something.</h2>
        <p class="m-0 text-[17px] text-white/70">Open to backend roles and collaborations.</p>
        <div class="flex flex-wrap gap-3.5 max-lg:w-full">
          <a href="mailto:rexyou0831@gmail.com"
             class="rounded-full bg-accent px-8 py-4 text-base font-bold text-accentInk max-lg:w-full max-lg:px-5 max-lg:py-3.5 max-lg:text-center max-lg:text-[15px]">
            rexyou0831@gmail.com
          </a>
          <a v-for="l in contactLinks" :key="l.href" :href="l.href"
             class="rounded-full border border-white/30 px-8 py-4 text-base font-bold text-paper max-lg:w-full max-lg:px-5 max-lg:py-3.5 max-lg:text-center max-lg:text-[15px]">
            {{ l.label }}
          </a>
        </div>
      </div>
    </section>

    <footer class="safe-x relative z-10 mx-auto flex max-w-[1280px] justify-between px-16 pb-12 pt-8 text-sm text-ink-softer dark:text-white/45 max-lg:flex-col max-lg:gap-2 max-lg:px-6 max-lg:pb-10">
      <div>© 2026 You Fu Ye (Rex)</div>
      <div>Ampang, Selangor, Malaysia</div>
    </footer>
  </div>
</template>
