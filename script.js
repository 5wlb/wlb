const texts = [
    "5WLB.COM",

    "WX：WX-5WLB",
    "EMAIL：WLB@5WLB.COM"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;

function type() {
    const currentText = texts[textIndex];
    const typingElement = document.getElementById('typing-text');
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let delta = isDeleting ? erasingDelay : typingDelay;
    
    if (!isDeleting && charIndex === currentText.length) {
        delta = newTextDelay;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }
    
    setTimeout(type, delta);
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, newTextDelay);
}); 