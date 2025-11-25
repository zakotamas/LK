document.addEventListener('DOMContentLoaded', () => {
    // === 1. Reszponzív Menü Kezelése ===
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('nav-open');
        });
        
        // Menü bezárása, ha rákattintanak egy linkre (Single-page app navigáció)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('nav-open');
            });
        });
    }

    // === 2. Megfigyelő beállítása az animációkhoz (Fade-in, Slide-in, Zoom-in) ===
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
    });

    // Animációs elemek kiválasztása
    const animatedElements = document.querySelectorAll(
        '.fade-in-section, .slide-in-left, .slide-in-right, .slide-in-up, .zoom-in'
    );

    // Minden animációs elem megfigyelése
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});





// Projekt aloldal

        // JavaScript a mobil menü vezérléséhez
        document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.getElementById('menuToggle');
            const mainNav = document.getElementById('mainNav');

            if (menuToggle && mainNav) {
                menuToggle.addEventListener('click', () => {
                    mainNav.classList.toggle('open');
                });
                
                // Menü bezárása, ha rákattintanak egy linkre (mobil nézetben)
                const navLinks = mainNav.querySelectorAll('a');
                navLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        if (window.innerWidth <= 768) {
                            mainNav.classList.remove('open');
                        }
                    });
                });
            }
        });