document.addEventListener('DOMContentLoaded', function () {
    const animableImages = document.querySelectorAll('.animable');

    animableImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.5s ease';
        });

        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
            image.style.transition = 'transform 0.5s ease';
        });
    });
});
