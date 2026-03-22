// submit.js — Submission page interactions

document.addEventListener('DOMContentLoaded', function () {

    // =============================================
    // CARD HOVER COLOUR
    // Reads --card-color from each submit-card and applies
    // it as the border-top colour on hover via JS so we don't
    // need to hardcode it per card in CSS.
    // =============================================
    const submitCards = document.querySelectorAll('.submit-card');

    submitCards.forEach(card => {
        // Staggered entrance animation
        const index = Array.from(submitCards).indexOf(card);
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease';

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + index * 100);
    });

    // =============================================
    // STEP CARDS ENTRANCE
    // =============================================
    const steps = document.querySelectorAll('.submit-step');
    steps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(15px)';
        step.style.transition = `opacity 0.4s ease ${index * 0.1}s, transform 0.4s ease ${index * 0.1}s`;

        setTimeout(() => {
            step.style.opacity = '1';
            step.style.transform = 'translateY(0)';
        }, 200 + index * 100);
    });

    // =============================================
    // GUIDELINE CARDS ENTRANCE
    // =============================================
    const guidelines = document.querySelectorAll('.guideline-card');
    guidelines.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(15px)';
        card.style.transition = `opacity 0.4s ease, transform 0.4s ease`;

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + index * 100);
    });

    console.log(`%c Submit Page Loaded! 📜`, `color: #fbbf24; font-size: 16px; font-weight: bold;`);
});