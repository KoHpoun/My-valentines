const noBtn = document.getElementById("noBtn");

// Set a proximity distance (in pixels) that defines "close" to the button
const proximityDistance = 30; // 30px distance from the center of the button to trigger movement

// Set the maximum movement radius (in pixels)
const moveRadius = 700; // Max 700px move distance in any direction

// Function to randomly move the button within a defined radius
function moveButtonRandomly() {
    const moveX = (Math.random() - 0.5) * moveRadius * 2; // Random X movement (negative or positive)
    const moveY = (Math.random() - 0.5) * moveRadius * 2; // Random Y movement (negative or positive)
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`; // Apply the movement to the button
}

// Check if the mouse is within the proximity of the "No" button
noBtn.addEventListener("mouseenter", () => {
    noBtn.style.transition = "transform 0.3s ease-out"; // Add smooth transition when button moves
});

noBtn.addEventListener("mousemove", (event) => {
    const rect = noBtn.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate the distance from the mouse to the center of the button
    const distance = Math.sqrt(
        Math.pow(mouseX - (rect.left + rect.width / 2), 2) + Math.pow(mouseY - (rect.top + rect.height / 2), 2)
    );

    // If the cursor is within the proximity distance, move the button
    if (distance < proximityDistance) {
        moveButtonRandomly(); // Trigger movement only if near
    }
});

// Ensure the button doesn't move randomly if the cursor isn't near
noBtn.addEventListener("mouseleave", () => {
    noBtn.style.transition = "transform 0.3s ease-out"; // Ensure smooth transition back to the original position
    noBtn.style.transform = "translate(0, 0)"; // Reset the button to its original position
});
