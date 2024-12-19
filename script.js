window.onload = function () {
    const currentPage = document.location.pathname;

    if (currentPage.includes('index.html')) {
        const hasSeenAnimation = localStorage.getItem('hasSeenAnimation');

        if (!hasSeenAnimation) {
            window.location.href = 'animation.html';
        }

    } else if (currentPage.includes('animation.html')) {
        const footballWrapper = document.querySelector('.football-wrapper');
        const squadUpText = document.querySelector('.squad-up');

        // Start football animation
        setTimeout(() => {
            footballWrapper.style.transform = 'translateY(-300px) scale(10)';
            footballWrapper.style.animation = 'none';
        }, 2500);

        setTimeout(() => {
            squadUpText.style.opacity = '1';
        }, 2500);

        // Redirect to index.html after animation
        setTimeout(() => {
            localStorage.setItem('hasSeenAnimation', 'true');
            window.location.href = 'index.html';
        }, 4500);
    }
};
