const noBtn = document.getElementById("noBtn");

// Set a proximity distance to trigger movement (in pixels)
const proximityDistance = 30; // 30px from the center of the button to trigger movement

// Set the maximum movement radius (in pixels)
const moveRadius = 700; // Max 700px move distance in any direction

// Get the size of the viewport to limit movement to within the screen bounds
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Function to randomly move the button within a defined radius
function moveButtonRandomly() {
    // Generate random movement within the defined radius
    const moveX = (Math.random() - 0.5) * moveRadius * 2; 
    const moveY = (Math.random() - 0.5) * moveRadius * 2; 

    // Calculate the new left and top positions
    let newLeft = moveX;
    let newTop = moveY;

    // Ensure the button stays within the bounds of the viewport
    if (newLeft < 0) newLeft = 0; // Prevent moving off the left side
    if (newTop < 0) newTop = 0; // Prevent moving off the top side
    if (newLeft + noBtn.offsetWidth > screenWidth) newLeft = screenWidth - noBtn.offsetWidth; // Prevent moving off the right side
    if (newTop + noBtn.offsetHeight > screenHeight) newTop = screenHeight - noBtn.offsetHeight; // Prevent moving off the bottom side

    // Set the new position using absolute positioning
    noBtn.style.position = "absolute"; // Ensure it's positioned freely
    noBtn.style.left = `${newLeft}px`;
    noBtn.style.top = `${newTop}px`;
}

// Flag to check if the button has already moved
let hasMoved = false;

// Check if the mouse is within the proximity of the "No" button
noBtn.addEventListener("mousemove", (event) => {
    const rect = noBtn.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate the distance from the mouse to the center of the button
    const distance = Math.sqrt(
        Math.pow(mouseX - (rect.left + rect.width / 2), 2) + Math.pow(mouseY - (rect.top + rect.height / 2), 2)
    );

    // If the cursor is within the proximity distance, move the button, but only if it hasn't already moved
    if (distance < proximityDistance && !hasMoved) {
        moveButtonRandomly(); // Trigger movement only if near
        hasMoved = true; // Set the flag to prevent further movement until reset
    }
});
