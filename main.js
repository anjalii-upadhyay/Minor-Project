// ---------------- Text Effect ---------------------
let currentFaceIndex = 0;
const faces = ["front", "bottom", "back", "top"];
const textContainer = document.querySelector(".left-text");
let isRotating = false;
let rotationInProgress = false;

window.addEventListener("wheel", (event) => {
    if (rotationInProgress) return;  // Prevent scrolling while rotation is in progress

    rotationInProgress = true;  // Set flag to prevent multiple rotations during the process

    // Direction of scroll
    if (event.deltaY > 0) {
        // Scroll down - Move to the next face
        currentFaceIndex = (currentFaceIndex + 1) % faces.length; // Cycle forward
    } else {
        // Scroll up - Move to the previous face
        currentFaceIndex = (currentFaceIndex - 1 + faces.length) % faces.length; // Cycle backward
    }

    const newAngle = -currentFaceIndex * 90;
    textContainer.style.transform = `rotateX(${newAngle}deg)`;  // Rotate text

    // Allow scrolling only after a full rotation is complete
    setTimeout(() => {
        rotationInProgress = false;  // Reset flag after rotation completes
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });  // Scroll down after full rotation
    }, 2000); // Match timeout duration with the rotation time
});


// ------------------------ Find Turfs ------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const turfsContainer = document.querySelector(".turfs");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    // Update arrow states
    function updateArrows() {
        // Disable the left arrow if at the start of the container
        leftArrow.disabled = turfsContainer.scrollLeft === 0;

        // Disable the right arrow if at the end of the container
        rightArrow.disabled = turfsContainer.scrollLeft + turfsContainer.clientWidth >= turfsContainer.scrollWidth - 1;
    }

    // Scroll right
    rightArrow.addEventListener("click", () => {
        turfsContainer.scrollBy({ left: 300, behavior: "smooth" });
        setTimeout(updateArrows, 500); // Update arrows after scrolling
    });

    // Scroll left
    leftArrow.addEventListener("click", () => {
        turfsContainer.scrollBy({ left: -300, behavior: "smooth" });
        setTimeout(updateArrows, 500); // Update arrows after scrolling
    });

    // Check arrow states on load
    updateArrows();
});