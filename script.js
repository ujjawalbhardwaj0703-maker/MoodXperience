// MoodXperience - Interactive Sound Edition
// Author: Ujjawal Bhardwaj

const buttons = document.querySelectorAll(".mood-btn");
const message = document.getElementById("message");

// Mood data
const moods = {
  happy: {
    bg: "linear-gradient(135deg, #ffd166, #fca311)",
    text: "Keep smiling — happiness looks great on you! 😊",
    sound: "sound-happy"
  },
  calm: {
    bg: "linear-gradient(135deg, #a8edea, #fed6e3)",
    text: "Breathe in peace, breathe out stress. 🌿",
    sound: "sound-calm"
  },
  energetic: {
    bg: "linear-gradient(135deg, #ff006e, #f9c74f)",
    text: "Unstoppable energy! Let’s make things happen ⚡",
    sound: "sound-energetic"
  },
  sad: {
    bg: "linear-gradient(135deg, #5aa9e6, #b8c25d)",
    text: "It’s okay to slow down — brighter days are coming 💙",
    sound: "sound-sad"
  }
};

// Add click behavior to each mood button
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const moodType = btn.getAttribute("data-mood");
    const selectedMood = moods[moodType];

    // Change background
    document.body.style.background = selectedMood.bg;
    document.body.style.backgroundSize = "200% 200%";
    document.body.style.animation = "moveGradient 10s ease infinite";

    // Change text
    message.textContent = selectedMood.text;
    message.classList.remove("show");
    setTimeout(() => message.classList.add("show"), 50);

    // Stop any sound currently playing
    Object.values(moods).forEach(m => {
      const audio = document.getElementById(m.sound);
      audio.pause();
      audio.currentTime = 0;
    });

    // Play the new sound
    const moodSound = document.getElementById(selectedMood.sound);
    moodSound.play();
  });
});