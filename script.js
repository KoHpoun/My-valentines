const noBtn = document.getElementById("noBtn");

// Set a proximity distance to trigger movement (in pixels)
const proximityDistance = 30; // 30px from the center of the button to trigger movement

// Set the maximum movement radius (in pixels)
const moveRadius = 700; // Max 700px move distance in any direction

// Fixed screen size for 1080p resolution
const screenWidth = 1920;  // Full HD screen width (1920px)
const screenHeight = 1080; // Full HD screen height (1080px)

// Function to randomly move the button within a defined radius
function moveButtonRandomly() {
    // Generate random movement within the defined radius
    const moveX = (Math.random() - 0.5) * moveRadius * 2; 
    const moveY = (Math.random() - 0.5) * moveRadius * 2; 

    // Calculate the new left and top positions
    let newLeft = moveX;
    let newTop = moveY;

    // Ensure the button stays within the bounds of the 1080p screen (Full HD resolution)
    if (newLeft < 0) newLeft = 0; // Prevent moving off the left side
    if (newTop < 0) newTop = 0; // Prevent moving off the top side
    if (newLeft + noBtn.offsetWidth > screenWidth) newLeft = screenWidth - noBtn.offsetWidth; // Prevent moving off the right side
    if (newTop + noBtn.offsetHeight > screenHeight) newTop = screenHeight - noBtn.offsetHeight; // Prevent moving off the bottom side

    // Set the new position using absolute positioning
    noBtn.style.position = "absolute"; // Ensure it's positioned freely
    noBtn.style.left = `${newLeft}px`;
    noBtn.style.top = `${newTop}px`;

    // Debug log to check where it's moving
    console.log(`Button moved to: ${newLeft}px, ${newTop}px`);
}

// Always move the button if cursor is within 30px range
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
        moveButtonRandomly(); // Move the button
    }
});
