document.addEventListener('DOMContentLoaded', () => {
    
    // ======================================================
    // 1. LÓGICA GLOBAL (Funciona em TODAS as páginas)
    // ======================================================

    // --- Header com efeito de vidro ao rolar ---
    const header = document.querySelector('.glass-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Alternar Tema (Dark/Light Mode) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const iconSun = document.querySelector('.icon-sun');
    const iconMoon = document.querySelector('.icon-moon');

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            
            // Verifica se está no modo claro para trocar o ícone
            if (body.classList.contains('light-mode')) {
                if(iconSun) iconSun.style.display = 'none';
                if(iconMoon) iconMoon.style.display = 'block';
            } else {
                if(iconSun) iconSun.style.display = 'block';
                if(iconMoon) iconMoon.style.display = 'none';
            }
        });
    }

    // --- Menu Mobile (Abrir/Fechar) ---
    const mobileBtn = document.getElementById('mobile-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileBtn.classList.toggle('open');
            
            // Travar rolagem do fundo quando menu está aberto
            if (mobileMenu.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
        });

        // Fechar menu ao clicar em qualquer link
        const mobileLinks = document.querySelectorAll('.mobile-menu-content a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileBtn.classList.remove('open');
                body.style.overflow = 'auto';
            });
        });
    }

    // ======================================================
    // 2. LÓGICA DA PÁGINA PORTFÓLIO (Filtros)
    // ======================================================
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.portfolio-grid .project-card');

    // Só executa se existirem botões de filtro na tela
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // 1. Remove a classe 'active' de todos os botões
                filterBtns.forEach(b => b.classList.remove('active'));
                
                // 2. Adiciona 'active' no botão clicado
                btn.classList.add('active');

                // 3. Pega a categoria do botão (ex: 'landing', 'ecommerce')
                const filterValue = btn.getAttribute('data-filter');

                // 4. Percorre todos os cards e decide qual mostrar
                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');

                    if (filterValue === 'all' || filterValue === cardCategory) {
                        // Mostra o card
                        card.style.display = 'flex';
                        
                        // Pequena animação (opcional) para suavizar
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.opacity = '1';
                        }, 50);
                    } else {
                        // Esconde o card
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ======================================================
    // 3. LÓGICA DA PÁGINA HOME (Carrossel Mobile)
    // ======================================================

    const track = document.querySelector('.projects-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Só executa se o carrossel existir na página
    if (track && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: track.offsetWidth, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -track.offsetWidth, behavior: 'smooth' });
        });
    }

});