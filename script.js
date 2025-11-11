// MoodXperience
// Author: Ujjawal Bhardwaj
// Description: Interactive mood-based experience app with color & sound

// Select elements
const buttons = document.querySelectorAll('.mood-btn');
const message = document.getElementById('message');
const bgMusic = document.getElementById('bg-music');

// Mood data
const moods = {
  happy: {
    bg: "linear-gradient(135deg, #ffe259, #ffa751)",
    text: "Keep smiling – happiness looks great on you! 😊",
    sound: "./sounds/happy.mp3"
  },
  calm: {
    bg: "linear-gradient(135deg, #a8edea, #fed6e3)",
    text: "Breathe in peace, breathe out stress 🌿",
    sound: "./sounds/calm.mp3"
  },
  sad: {
    bg: "linear-gradient(135deg, #667db6, #0082c8, #667db6)",
    text: "It’s okay to feel sad sometimes 💙",
    sound: "./sounds/sad.mp3"
  },
  energetic: {
    bg: "linear-gradient(135deg, #f6d365, #fda085)",
    text: "Unstoppable energy ⚡ Let’s go!",
    sound: "./sounds/energetic.mp3"
  }
};

// Add click behavior for each mood button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const mood = button.getAttribute('data-mood');
    const selected = moods[mood];

    // Change background smoothly
    document.body.style.background = selected.bg;
    document.body.style.transition = "background 1s ease";

    // Show mood message
    message.textContent = selected.text;
    message.style.opacity = "0";
    setTimeout(() => {
      message.style.opacity = "1";
      message.style.transition = "opacity 1s ease";
    }, 100);

    // Play the corresponding sound
    bgMusic.src = selected.sound;
    bgMusic.volume = 0.8;
    bgMusic.play().catch(err => console.log("Audio playback blocked:", err));
  });
});

// Optional: default background when page loads
window.addEventListener('load', () => {
  document.body.style.background = "linear-gradient(135deg, #3e2723, #5d4037)";
});