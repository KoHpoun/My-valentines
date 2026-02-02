const noBtn = document.getElementById("noBtn");

// Set a proximity distance to trigger movement (in pixels)
const proximityDistance = 30; // 30px from the center of the button to trigger movement

// Set the maximum movement radius (in pixels)
const moveRadius = 700; // Max 700px move distance in any direction

// Track the current position of the button
let currentX = 0;
let currentY = 0;

// Function to randomly move the button within a defined radius
function moveButtonRandomly() {
    // Generate random movement within the defined radius
    const moveX = (Math.random() - 0.5) * moveRadius * 2; 
    const moveY = (Math.random() - 0.5) * moveRadius * 2; 

    // Update the button's position by adjusting currentX and currentY
    currentX += moveX;
    currentY += moveY;

    // Set the new position using absolute positioning
    noBtn.style.position = "absolute";
    noBtn.style.left = `${currentX}px`;
    noBtn.style.top = `${currentY}px`;
}

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
    if (distance < proximityDistance) {
        moveButtonRandomly(); // Move the button only if near
    }
});
