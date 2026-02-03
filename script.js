const noBtn = document.getElementById("noBtn");

// Set a proximity distance to trigger movement (in pixels)
const proximityDistance = 30; // 30px from the center of the button to trigger movement

// Set the maximum movement radius (in pixels)
const moveRadius = 700; // Max 700px move distance in any direction

// Function to randomly move the button within a defined radius
function moveButtonRandomly() {
    // Generate random movement within the defined radius
    const moveX = (Math.random() - 0.5) * moveRadius * 2; 
    const moveY = (Math.random() - 0.5) * moveRadius * 2; 

    // Update the button's position using absolute positioning
    noBtn.style.position = "absolute"; // Ensure it's positioned freely
    noBtn.style.left = `${moveX}px`;
    noBtn.style.top = `${moveY}px`;
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

// Reset the button's ability to move if necessary (e.g., after a timeout, or on another event)
function resetMovement() {
    hasMoved = false; // Allow the button to move again
}
