// ------------------------------
// Global Variables
// ------------------------------
let currentPage = 1;
const totalPages = 8;

// ------------------------------
// Show Page Function
// ------------------------------
function showPage(pageNumber) {
    for (let i = 1; i <= totalPages; i++) {
        const p = document.getElementById(`page${i}`);
        if (i === pageNumber) {
            p.style.opacity = 1;
            p.style.zIndex = 10;
            gsap.fromTo(p, {y:50, opacity:0}, {y:0, opacity:1, duration:1.2, ease:"power3.out"});
        } else {
            p.style.opacity = 0;
            p.style.zIndex = 0;
        }
    }
}
showPage(1);

// ------------------------------
// Page 1 Buttons
// ------------------------------
document.getElementById('yesBtn').addEventListener('click', () => {
    showPage(2);
});

document.getElementById('noBtn').addEventListener('click', () => {
    alert("Please say Yes 😍");
});

// ------------------------------
// Page 2 Try Again Button
// ------------------------------
document.getElementById('tryAgainBtn').addEventListener('click', () => {
    showPage(3);
});

// ------------------------------
// Page 3: Hidden Item Mini-game
// Random position and click animation
// ------------------------------
const hiddenItem = document.querySelector('.hidden-item');
const treeContainer = document.querySelector('.tree');
function placeHiddenItemRandom() {
    const treeWidth = treeContainer.offsetWidth;
    const treeHeight = treeContainer.offsetHeight;
    const maxX = treeWidth - 50; // item width
    const maxY = treeHeight - 50; // item height
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    hiddenItem.style.left = `${randomX}px`;
    hiddenItem.style.top = `${randomY}px`;
}
placeHiddenItemRandom();

hiddenItem.addEventListener('click', () => {
    gsap.to(hiddenItem, {scale:1.5, rotation:360, duration:0.7, ease:"back.out(2)"});
    alert("You found the hidden item! 💖");
    showPage(4);
});

// ------------------------------
// Page 4: Clickable Gifts
// ------------------------------
document.querySelectorAll('.gift').forEach(gift => {
    gift.addEventListener('click', () => {
        const msg = gift.dataset.msg;
        alert(`You opened ${msg}! ❤️`);
        gsap.fromTo(gift, {scale:0.5, rotation:0}, {scale:1.2, rotation:15, duration:0.7, ease:"elastic.out(1,0.5)"});
    });
});

// ------------------------------
// Page 5: Coupons Pop Animation
// ------------------------------
document.querySelectorAll('.coupon').forEach(coupon => {
    coupon.addEventListener('mouseenter', () => {
        gsap.to(coupon, {scale:1.3, rotation:5, duration:0.5, ease:"elastic.out(1,0.5)"});
    });
    coupon.addEventListener('mouseleave', () => {
        gsap.to(coupon, {scale:1, rotation:0, duration:0.5, ease:"power1.out"});
    });
    coupon.addEventListener('click', () => {
        gsap.fromTo(coupon, {y:-50, opacity:0}, {y:0, opacity:1, duration:0.7, ease:"bounce.out"});
        alert("Special Surprise Revealed! 💖");
    });
});

// ------------------------------
// Page 7: Typewriter Anniversary Note
// ------------------------------
const loveText = document.getElementById('loveText');
const message = `Happy 1-Year Anniversary, Wahida ❤️

From 22 Feb to today, every moment with you is a treasure.
I love you endlessly, and I can't wait for all our future adventures together 💖

Your smile makes my heart skip a beat.
Forever yours, Saqib 🥰`;
let i = 0;
const speed = 80;
function typeWriter() {
    if (i < message.length) {
        loveText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
document.getElementById('page7').addEventListener('transitionend', typeWriter);

// ------------------------------
// Floating Hearts & Butterflies (tsParticles)
tsParticles.load("page7", {
    fpsLimit: 60,
    particles: {
        number: { value: 20 },
        color: { value: ["#ff467e", "#ff9ec4", "#ffe0f0"] },
        shape: { type: "heart" },
        size: { value: 12 },
        move: { enable: true, speed: 2, direction: "top", outModes: "out" },
        opacity: { value: 0.8 },
        rotate: { value: { min:0, max:360 }, direction: "random", animation: { enable:true, speed:5 } }
    }
});
tsParticles.load("page4", {
    fpsLimit: 60,
    particles: {
        number: { value: 15 },
        color: { value: ["#ff467e", "#ff9ec4"] },
        shape: { type: "circle" },
        size: { value: 6 },
        move: { enable: true, speed: 1.5, direction: "top", outModes: "out" },
        opacity: { value: 0.7 },
    }
});

// ------------------------------
// Background Music (Howler.js)
const bgMusic = new Howl({
    src: ['assets/music/song.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.5
});

// ------------------------------
// Page 8: Guess Song
const guessBtn = document.getElementById('guessBtn');
guessBtn.addEventListener('click', () => {
    const input = document.getElementById('guessInput').value.toLowerCase();
    if(input.includes("our song")) {
        alert("Correct! You know our song 💖");
    } else {
        alert("Try again 😘");
    }
});

// ------------------------------
// Initialize AOS for page scroll/animations
AOS.init();