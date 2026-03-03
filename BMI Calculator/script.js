let bubbles = document.querySelector("#bubbles")

function createdBubbleAnimation() {
    for (let i = 0; i < 18; i++) {
        let bubble = document.createElement("div")
        bubble.classList.add("bubble");
        const size = Math.random() * 60 + 50;
        bubble.style.cssText = `width:${size}px; height:${size}px; left:${Math.random() * 100}%; animation-duration:${Math.random() * 12 + 8}s; animation-delay:${Math.random() * 10}s`;
        bubbles.appendChild(bubble);
    }
}

createdBubbleAnimation();
