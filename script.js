const noBtn = document.getElementById("noBtn");

// Set a proximity distance to trigger movement (in pixels)
const proximityDistance = 30; // 30px from the center of the button to trigger movement

// Set the maximum movement radius (in pixels)
const moveRadius = 700; // Max 700px move distance in any direction

// Function to randomly move the button within a defined radius
function moveButtonRandomly() {
    const moveX = (Math.random() - 0.5) * moveRadius * 2; // Random X movement (negative or positive)
    const moveY = (Math.random() - 0.5) * moveRadius * 2; // Random Y movement (negative or positive)
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`; // Apply the movement to the button
}

// Track if the button has already moved
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

    // If the cursor is within the proximity distance and the button hasn't already moved, move the button
    if (distance < proximityDistance && !hasMoved) {
        moveButtonRandomly(); // Trigger movement only if near
        hasMoved = true; // Prevent further movement
    }
});
