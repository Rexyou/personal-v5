<script setup>
defineProps({ label: String, id: String })
</script>

<template>
  <section :id="id" class="safe-x mx-auto max-w-[1280px] px-16 pb-24 max-lg:px-6">
    <div data-anim class="grid grid-cols-[220px_1fr] gap-x-[60px] max-lg:grid-cols-1 max-lg:gap-5">
      <div class="font-display text-[15px] font-semibold uppercase tracking-[0.02em] text-ink-soft dark:text-white/55">
        {{ label }}
      </div>
      <div><slot /></div>
    </div>
  </section>
</template>
