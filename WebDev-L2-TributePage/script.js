// ==========================================
// Tribute Page Animation
// ==========================================

// Select all cards
const cards = document.querySelectorAll(".card");

// Hide cards initially
cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
});

// Animate cards one by one
window.addEventListener("load", () => {

    cards.forEach((card, index) => {

        setTimeout(() => {

            card.style.transition = "all 0.8s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 300);

    });

});
































































