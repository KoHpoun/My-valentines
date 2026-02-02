const noBtn = document.getElementById("noBtn");

// Set a distance for when the mouse is "near" the button
const proximityDistance = 30; // 100px from the button edge

// Function to randomly move the button by a small distance
function moveButtonRandomly() {
    const moveDistance = 700;
    const randomDirection = Math.random() < 0.5 ? -1 : 1;

    const moveX = Math.random() * moveDistance * randomDirection;
    const moveY = Math.random() * moveDistance * randomDirection;

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

// Check if the cursor is within the proximity of the No button
noBtn.addEventListener("mousemove", (event) => {
    const rect = noBtn.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate the distance between the mouse and the button
    const distance = Math.sqrt(
        Math.pow(mouseX - (rect.left + rect.width / 2), 2) + Math.pow(mouseY - (rect.top + rect.height / 2), 2)
    );

    // If the cursor is within the proximity distance, move the button
    if (distance < proximityDistance) {
        moveButtonRandomly();
    }
});

