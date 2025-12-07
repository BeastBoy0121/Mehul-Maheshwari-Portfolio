/**
 * Personal Portfolio - Main JavaScript
 * Handles Navigation and UI Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initModals();
});

/* Navigation Logic */
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('fullscreen-menu');
    const links = document.querySelectorAll('.menu-link');

    if (navToggle && menu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            menu.classList.toggle('active');
            
            // Accessibility
            const isExpanded = navToggle.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking a link
        links.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                menu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

/* Project Modals */
function initModals() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('close-modal');
    const projectCards = document.querySelectorAll('.project-card');
    
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');

    // Project Data (Mock)
    const projects = {
        '1': {
            title: 'Neon Verse',
            desc: 'An immersive 3D journey built with Three.js and WebGL. Features interactive particle systems and audio-reactive visuals.'
        },
        '2': {
            title: 'Cyber Dashboard',
            desc: 'A futuristic data visualization dashboard built with React and D3.js. Displays real-time server metrics with a cyberpunk aesthetic.'
        },
        '3': {
            title: 'Abstract Art',
            desc: 'Generative art pieces created using the HTML5 Canvas API and custom algorithms. Each reload generates a unique composition.'
        }
    };

    if (modal && closeBtn) {
        // Open Modal
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.getAttribute('data-project');
                const data = projects[projectId];
                
                if (data) {
                    modalTitle.textContent = data.title;
                    modalDesc.textContent = data.desc;
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Prevent background scroll
                }
            });
        });

        // Close Modal
        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        };

        closeBtn.addEventListener('click', closeModal);
        
        // Close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }
}
