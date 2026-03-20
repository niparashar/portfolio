import { projects } from '../data/projects.js';

// --- MODAL ---
let backdrop, modalClose;

export function initModal() {
    
    backdrop = document.getElementById('modalBackdrop');
    modalClose = document.getElementById('modalClose');

    modalClose.addEventListener('click', closeModal);
    backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
    document.getElementById('modal').addEventListener('click', e => {
    const link = e.target.closest('.modal-link');
    if (link) {
        closeModal();
        setTimeout(() => openModal(link.dataset.target), 260);
    }
    });
}

export function openModal(indexOrId) {

    const i = typeof indexOrId === 'number'
        ? indexOrId
        : projects.findIndex(p => p.id === indexOrId);
    if (i === -1) return;

    const p = projects[i];
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalDomain').textContent = p.domain;
    document.getElementById('modalStack').innerHTML = p.stack.map(s => `<span class="stack-tag">${s}</span>`).join('');
    document.getElementById('modalProblem').textContent = p.problem;
    document.getElementById('modalObjective').textContent = p.objective;
    document.getElementById('modalApproach').textContent = p.approach;
    document.getElementById('modalImplementation').textContent = p.implementation;
    document.getElementById('modalOutcome').innerHTML = p.outcome;
    document.getElementById('modalSkills').innerHTML = p.skills.map(s => `<span class="skill-pill">${s}</span>`).join('');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
}

export function closeModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
}
