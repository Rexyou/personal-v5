<script setup>
import { ref } from 'vue'
import { navLinks } from '../data'

const props = defineProps({ open: Boolean })
const emit = defineEmits(['close'])

const dragY = ref(0)
let startY = null

function onStart(e) { startY = e.touches[0].clientY }
function onMove(e) {
  if (startY === null) return
  const dy = e.touches[0].clientY - startY
  if (dy > 0) dragY.value = dy
}
function onEnd() {
  if (dragY.value > 110) emit('close')
  dragY.value = 0
  startY = null
}
</script>

<template>
  <!-- Scrim -->
  <div
    class="fixed inset-0 z-[60] bg-black/45 transition-opacity duration-250"
    :class="open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
    @click="emit('close')"
  />

  <!-- Draggable bottom sheet -->
  <div
    class="fixed inset-x-0 bottom-0 z-[61] rounded-t-3xl bg-paper text-ink shadow-[0_-20px_60px_rgb(0_0_0_/_0.25)] touch-none dark:bg-night dark:text-white/95"
    :class="[
      dragY ? '' : 'transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]',
      open ? '' : 'pointer-events-none',
    ]"
    :style="{ transform: open ? `translateY(${dragY}px)` : 'translateY(110%)' }"
    @touchstart="onStart"
    @touchmove="onMove"
    @touchend="onEnd"
  >
    <div class="flex cursor-grab justify-center pb-1.5 pt-3">
      <div class="h-[5px] w-11 rounded-full bg-black/15 dark:bg-white/25" />
    </div>

    <nav class="flex flex-col px-6 py-2">
      <a
        v-for="(link, i) in navLinks"
        :key="link.href"
        :href="link.href"
        class="font-display text-[22px] font-bold text-ink dark:text-white/95"
        :class="['py-4', i < navLinks.length - 1 ? 'border-b border-black/[0.08] dark:border-white/10' : '']"
        @click="emit('close')"
      >{{ link.label }}</a>
    </nav>

    <div class="safe-b px-6 pt-3">
      <a
        href="mailto:rexyou0831@gmail.com"
        class="block rounded-full bg-accent py-4 text-center text-base font-bold text-accentInk"
        @click="emit('close')"
      >Get in touch</a>
    </div>
  </div>
</template>
