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
    console.log(`Button moved to: ${newLeft}px, ${newTop}px`); // Logging for debugging
}

// Flag to check if the button has already moved
let hasMoved = false;

// Track mouse distance to reset movement
let lastMouseX = -1;
let lastMouseY = -1;

// Check if the mouse is within the proximity of the "No" button
noBtn.addEventListener("mousemove", (event) => {
    const rect = noBtn.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate the distance from the mouse to the center of the button
    const distance = Math.sqrt(
        Math.pow(mouseX - (rect.left + rect.width / 2), 2) + Math.pow(mouseY - (rect.top + rect.height / 2), 2)
    );

    // If the cursor is within the proximity distance and the button hasn't already moved, move the button
    if (distance < proximityDistance && !hasMoved) {
        moveButtonRandomly(); // Move the button
        hasMoved = true; // Set flag so it doesn't move until cursor gets near again
    }

    // Reset the "hasMoved" flag if the mouse moves far enough from the button
    if (lastMouseX !== -1 && lastMouseY !== -1) {
        const moveAwayDistance = Math.sqrt(
            Math.pow(mouseX - lastMouseX, 2) + Math.pow(mouseY - lastMouseY, 2)
        );
        
        // Reset movement flag if the mouse moves far enough from the button
        if (moveAwayDistance > 100) { // Distance to reset movement
            hasMoved = false;
        }
    }

    // Update last mouse position for future distance calculations
    lastMouseX = mouseX;
    lastMouseY = mouseY;
});
