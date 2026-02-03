const noBtn = document.getElementById("noBtn");

// Constants for proximity and screen resolution
const proximityDistance = 100; // Move when cursor is within 30px of the button
const moveRadius = 700; // Maximum random movement distance in pixels
const screenWidth = 1920;  // Full HD screen width (1920px)
const screenHeight = 1080; // Full HD screen height (1080px)

// Function to randomly move the button within the screen boundaries
function moveButtonRandomly() {
    // Generate random movement within the defined radius
    const moveX = (Math.random() - 0.5) * moveRadius * 2;
    const moveY = (Math.random() - 0.5) * moveRadius * 2;

    // Constrain new position to ensure it stays within the screen bounds
    let newLeft = Math.max(0, Math.min(screenWidth - noBtn.offsetWidth, moveX));
    let newTop = Math.max(0, Math.min(screenHeight - noBtn.offsetHeight, moveY));

    // Update button position with absolute positioning
    noBtn.style.position = "absolute";
    noBtn.style.left = `${newLeft}px`;
    noBtn.style.top = `${newTop}px`;

    console.log(`Button moved to: ${newLeft}px, ${newTop}px`); // Debugging output
}

// Event listener to track mouse movement near the button
noBtn.addEventListener("mousemove", (event) => {
    const rect = noBtn.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate distance between cursor and center of the button
    const distance = Math.sqrt(
        Math.pow(mouseX - (rect.left + rect.width / 2), 2) + Math.pow(mouseY - (rect.top + rect.height / 2), 2)
    );

    // If the cursor is within the proximity distance, move the button
    if (distance < proximityDistance) {
        moveButtonRandomly();
    }
});


