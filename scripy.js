document.addEventListener('DOMContentLoaded', () => {

    /* =============================================================
       MENU MOBILE (HAMBÚRGUER)
       ============================================================= */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Verifica se os elementos existem para evitar erro
    if (hamburger && navLinks) {
        
        // 1. Ao clicar no ícone do menu
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Troca o ícone de Barras para X
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // 2. Ao clicar em um link do menu, fecha o menu automaticamente
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                
                // Reseta o ícone para barras
                const icon = hamburger.querySelector('i');
                if(icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});