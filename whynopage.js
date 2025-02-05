let clickCount = 0;

document.getElementById('noButton').addEventListener('click', function () {
    // Fix the button size to 45% width after clicking it
    this.style.width = '45%';

    // Get the button's size
    const buttonWidth = this.offsetWidth;
    const buttonHeight = this.offsetHeight;

    // Get the screen's width and height
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Get the container's size and position (white box)
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    // Allow the button to move randomly but keep it within a range of the container
    const margin = 100; // Adjust this margin to control how far it moves from the container

    // Random positions based on the screen size but restricted by the container's position
    let randomX = Math.random() * (screenWidth - buttonWidth); 
    let randomY = Math.random() * (screenHeight - buttonHeight);

    // Allow movement beyond the container but not too far from it
    randomX = Math.max(containerRect.left - margin, Math.min(randomX, containerRect.right + margin));
    randomY = Math.max(containerRect.top - margin, Math.min(randomY, containerRect.bottom + margin));

    // Apply the new position using transform (positioning the button relative to the container)
    this.style.transform = `translate(${randomX - this.offsetLeft}px, ${randomY - this.offsetTop}px)`;

    // Increment the click count
    clickCount++;

    // If clicked 10 times, redirect to another page
    if (clickCount >= 10) {
        location.href = 'datewithme.html';
    }
});
