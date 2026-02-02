const noBtn = document.getElementById("noBtn");

// Set a proximity distance to trigger movement (in pixels)
const proximityDistance = 30; // 30px from the button edge

// Set the maximum distance the button can move when the mouse is close
const moveRadius = 700; // 700px radius for button movement

// Function to randomly move the button within a radius
function moveButtonRandomly() {
    const moveX = (Math.random() - 0.5) * moveRadius * 2; // random move in X direction
    const moveY = (Math.random() - 0.5) * moveRadius * 2; // random move in Y direction
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`; // Apply the move to the button
}

// Check if the cursor is within the proximity of the No button
noBtn.addEventListener("mousemove", (event) => {
    const rect = noBtn.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate the distance from the cursor to the center of the button
    const distance = Math.sqrt(
        Math.pow(mouseX - (rect.left + rect.width / 2), 2) + Math.pow(mouseY - (rect.top + rect.height / 2), 2)
    );

    // If the mouse is within the proximity, move the button
    if (distance < proximityDistance) {
        moveButtonRandomly(); // Move the button randomly within the radius
    }
});
