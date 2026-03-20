// --- TIMELINE SCROLL ANIMATION ---
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), idx * 80);
    }
  });
}, { threshold: 0.15 });

export function initTimeline() {
    document.querySelectorAll('.tl-item').forEach(el => observer.observe(el));
}