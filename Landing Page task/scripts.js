document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        const targetElement = document.querySelector(target);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const learnMoreBtn = document.getElementById('learn-more-btn');
learnMoreBtn.addEventListener('mouseover', function() {
    learnMoreBtn.textContent = "Let's Start!";
});
learnMoreBtn.addEventListener('mouseout', function() {
    learnMoreBtn.textContent = "Learn More";
});