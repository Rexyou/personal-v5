import { onMounted, onUnmounted } from 'vue'

/**
 * Reveals [data-anim] elements as they enter the viewport.
 * Elements are only hidden after JS arms them, and a sweep runs on
 * scroll / resize / interval so nothing can stay invisible.
 */
export function useScrollReveal() {
  let io = null
  let timer = null
  let sweep = null

  onMounted(() => {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    )

    sweep = () => {
      document.querySelectorAll('[data-anim]').forEach((el, i) => {
        if (!el.dataset.armed) {
          el.dataset.armed = '1'
          el.classList.add('armed')
          el.style.animationDelay = (i % 3) * 0.08 + 's'
          io.observe(el)
        }
        if (!el.classList.contains('in') && el.getBoundingClientRect().top < window.innerHeight * 0.92) {
          el.classList.add('in')
          io.unobserve(el)
        }
      })
    }

    requestAnimationFrame(sweep)
    timer = setInterval(sweep, 400)
    window.addEventListener('scroll', sweep, { passive: true })
    window.addEventListener('resize', sweep)
  })

  onUnmounted(() => {
    io?.disconnect()
    clearInterval(timer)
    window.removeEventListener('scroll', sweep)
    window.removeEventListener('resize', sweep)
  })
}
