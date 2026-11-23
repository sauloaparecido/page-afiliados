/**
 * HYPER Electronic Media - Scripts Principais
 * Mantido simples e seguro para máxima performance.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Efeito de "toque" (Active State) para Mobile
    const cards = document.querySelectorAll('.link-card, .product-card');
    
    cards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.1s';
        }, { passive: true });

        card.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.3s';
        }, { passive: true });
    });

    // 2. Reforço de Segurança para Links Externos (Prevenção de Tabnabbing)
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        // Garante que todos os links com target="_blank" tenham as proteções
        link.setAttribute('rel', 'noopener noreferrer');
    });
});