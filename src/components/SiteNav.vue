<script setup>
import { navLinks } from '../data'

defineProps({ dark: Boolean })
const emit = defineEmits(['toggle-dark', 'open-menu'])
</script>

<template>
  <nav class="safe-x sticky top-0 z-20 mx-auto flex max-w-[1280px] items-center justify-between bg-transparent px-16 py-7 backdrop-blur-[10px] max-lg:px-6 max-lg:py-4">
    <div class="font-display text-xl font-bold tracking-[-0.02em]">Rex You</div>

    <!-- Desktop links -->
    <div class="flex items-center gap-9 max-lg:hidden">
      <a
        v-for="link in navLinks.slice(0, 4)"
        :key="link.href"
        :href="link.href"
        class="text-[15px] font-semibold text-ink-soft hover:text-accent dark:text-white/70 dark:hover:text-accent"
      >{{ link.label }}</a>

      <button
        class="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-black/10 text-base dark:border-white/20"
        :aria-label="dark ? 'Switch to light mode' : 'Switch to dark mode'"
        @click="emit('toggle-dark')"
      >{{ dark ? '☀' : '☾' }}</button>

      <a
        href="mailto:rexyou0831@gmail.com"
        class="rounded-full bg-ink px-[22px] py-2.5 text-sm font-semibold text-paper dark:bg-white dark:text-night"
      >Contact</a>
    </div>

    <!-- Mobile controls -->
    <div class="hidden items-center gap-3 max-lg:flex">
      <button
        class="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-base dark:border-white/20"
        :aria-label="dark ? 'Switch to light mode' : 'Switch to dark mode'"
        @click="emit('toggle-dark')"
      >{{ dark ? '☀' : '☾' }}</button>

      <button
        class="flex h-11 w-11 flex-col items-center justify-center gap-1 rounded-full bg-ink dark:bg-white"
        aria-label="Open menu"
        @click="emit('open-menu')"
      >
        <span class="block h-0.5 w-4 rounded-sm bg-paper dark:bg-night" />
        <span class="block h-0.5 w-4 rounded-sm bg-paper dark:bg-night" />
      </button>
    </div>
  </nav>
</template>
