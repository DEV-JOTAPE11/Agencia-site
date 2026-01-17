document.addEventListener('DOMContentLoaded', () => {
    // Seletores
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const iconSun = document.querySelector('.icon-sun');
    const iconMoon = document.querySelector('.icon-moon');
    
    const mobileBtn = document.getElementById('mobile-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    const header = document.querySelector('.glass-header');

    window.addEventListener('scroll', () => {
        // Se rolar mais de 50px para baixo, adiciona a classe. Se não, remove.
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }); 

    // --- LÓGICA DE TEMA (DARK/LIGHT) ---
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLightMode = body.classList.contains('light-mode');

        if (isLightMode) {
            iconSun.style.display = 'none';
            iconMoon.style.display = 'block';
        } else {
            iconSun.style.display = 'block';
            iconMoon.style.display = 'none';
        }
    });

    // --- LÓGICA DO MENU MOBILE ---
    mobileBtn.addEventListener('click', () => {
        // Toggle Classes
        mobileMenu.classList.toggle('active'); // Mostra/Esconde Overlay
        mobileBtn.classList.toggle('open');    // Anima Ícone X
        
        // Travar Scroll do Body
        if (mobileMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    });
    
    // Fechar ao clicar em link
    document.querySelectorAll('.mobile-menu-content a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileBtn.classList.remove('open');
            body.style.overflow = 'auto';
        });
    });


    // --- LÓGICA DO CARROSSEL DE PROJETOS (MOBILE) ---
    const track = document.querySelector('.projects-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (track && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            // Rola para a direita a largura de um card (aproximada)
            track.scrollBy({ left: track.offsetWidth, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            // Rola para a esquerda
            track.scrollBy({ left: -track.offsetWidth, behavior: 'smooth' });
        });
    }
});