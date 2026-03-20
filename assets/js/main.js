import { projects } from './data/projects.js';
import { openModal, closeModal, initModal } from './components/modal.js';
import { initTimeline } from './components/timeline.js';

// --- RENDER TILES ---
const grid = document.getElementById('projectsGrid');
projects.forEach((p, i) => {
  const tile = document.createElement('div');
  tile.className = 'project-tile';
  tile.innerHTML = `
    <div class="tile-stack">${p.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}</div>
    <div class="tile-title">${p.title}</div>
    <div class="tile-domain">${p.domain}</div>
    <p class="tile-problem">${p.problem}</p>
    <div class="tile-footer">
      <span class="tile-skills">${p.skills.slice(0,3).join(' · ')}</span>
      <span class="tile-arrow">→</span>
    </div>
  `;
  tile.addEventListener('click', () => openModal(i));
  grid.appendChild(tile);
});

// --- Initialize components ---
initModal();
initTimeline();