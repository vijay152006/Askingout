// Function to create a single snowflake
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');

  // Randomize starting horizontal position (left)
  const startLeft = Math.random() * 100;  // 0-100% of viewport width
  snowflake.style.left = `${startLeft}vw`;

  // Randomize size of the snowflake
  const size = Math.random() * 5 + 10;  // Snowflakes between 10px and 15px
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;

  // Randomize the fall speed (animation duration)
  const duration = Math.random() * 4 + 6;  // Random duration between 6 and 10 seconds
  snowflake.style.animationDuration = `${duration}s`;
  snowflake.style.animationTimingFunction = 'linear';  // Smooth linear motion

  // Random horizontal movement (drift to the left or right)
  const horizontalMovement = (Math.random() * 2 - 1) * 3;  // Random movement between -3vw and 3vw
  snowflake.style.setProperty('--horizontalMovement', `${horizontalMovement}vw`);

  // Append the snowflake to the body
  document.body.appendChild(snowflake);

  // Remove snowflake after animation duration
  setTimeout(() => {
    snowflake.remove();
  }, duration * 1000);  // Match this to the animation duration in seconds
}

// Function to continuously generate snowflakes
function startSnowfall() {
  setInterval(createSnowflake, 100);  // Create a new snowflake every 100ms (increase snowflake count)
}

// Call the snowfall function when the DOM is loaded
document.addEventListener('DOMContentLoaded', startSnowfall);
