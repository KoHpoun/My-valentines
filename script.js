const noBtn = document.getElementById("noBtn");

// Function to randomly move the button by a small distance
function moveButtonRandomly() {
    const moveDistance = 700;
    const randomDirection = Math.random() < 0.5 ? -1 : 1;

    const moveX = Math.random() * moveDistance * randomDirection;
    const moveY = Math.random() * moveDistance * randomDirection;

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

// Start moving the "No" button at intervals
setInterval(moveButtonRandomly, 500); // Move every 500ms

// Make the button jump around when mouse enters the button area
noBtn.addEventListener("mouseenter", () => {
    moveButtonRandomly(); // Move immediately when the cursor enters
});
