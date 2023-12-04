const image = document.getElementById('animatedImage');
let moveX = 0;
let moveY = 0;
let directionX = 1;
let directionY = 1;

function animateImage() {

    if (moveX > 5 || moveX < -5) directionX *= -1;
    if (moveY > 5 || moveY < -5) directionY *= -1;

    moveX += 0.1 * directionX;
    moveY += 0.1 * directionY;

    image.style.transform = `translate(${moveX}px, ${moveY}px)`;

    requestAnimationFrame(animateImage);
}

animateImage();



