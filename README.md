# Rex You — Portfolio (Vue 3 + Tailwind)

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Structure

- `src/App.vue` — the page: hero, about, skills, experience, projects, education, contact
- `src/data.js` — all content (experience, skills, projects, education). **Edit copy here, not in the template.**
- `src/components/SiteNav.vue` — sticky transparent nav; desktop links + mobile burger
- `src/components/MobileMenu.vue` — drag-to-dismiss bottom sheet (touch handlers, no library)
- `src/components/SectionBlock.vue` — the label + content two-column section wrapper
- `src/composables/useDarkMode.js` — `class` strategy, persisted to localStorage
- `src/composables/useScrollReveal.js` — fade-up on scroll; also sweeps on scroll/resize/interval so nothing stays hidden if the observer misses

## Notes

- **Dark mode** uses Tailwind's `darkMode: 'class'` on `<html>`. Preference persists across reloads.
- **iOS Safari**: `viewport-fit=cover` plus `.safe-x` / `.safe-b` helpers in `style.css` handle notch and home-indicator insets. `-webkit-text-size-adjust` stops Safari inflating text in landscape.
- **Avatar** is an `RY` monogram placeholder. Replace the inner `div` in `App.vue` with an `<img class="h-[200px] w-[200px] rounded-full object-cover">`.
- **Breakpoint**: mobile rules use `max-lg:` (below 1024px), matching the original design.
- **Reduced motion** is respected via a media query in `style.css`.
