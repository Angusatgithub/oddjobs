const textInput = document.getElementById("text-input");
const dynamicText = document.getElementById("dynamic-text");
const toggleButton = document.getElementById("toggle-animation");
const speedInput = document.getElementById("speed-input");

// List of fonts to randomly select from
const fonts = [
  "synthemesc",
  "blow-up",
  "lores-12",
  "imaginaryfriend-bb",
  "joschmi",
  "reross-quadratic",
  "alfarn",
  "eckmannpsych-medium",
  "permanent-marker-pro",
  "puffin-arcade-liquid",
  "puffin-arcade-nerf",
  "good-karma-caps",
  "duffy-script",
  "parry",
  "cheee-variable",
];

// Animation settings
let animateFonts = true;
let animationInterval;

// Function to update dynamic text
function updateDynamicText() {
  const text = textInput.value;
  dynamicText.innerHTML = "";

  // Create a span for each letter and apply a random font
  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    dynamicText.appendChild(span);
  }
}

// Function to animate fonts
function animateFontsInterval() {
  const spans = dynamicText.children;
  for (let i = 0; i < spans.length; i++) {
    spans[i].style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
  }
}

// Function to update animation interval
function updateAnimationInterval() {
  clearInterval(animationInterval);
  const speed = 2000 - parseInt(speedInput.value, 10) + 50; // Reverse the slider value
  animationInterval = setInterval(animateFontsInterval, speed);
}

// Initialize dynamic text with default value
updateDynamicText();

// Initialize animation interval with default speed
updateAnimationInterval();

// Listen for input events on the text input field
textInput.addEventListener("input", () => {
  updateDynamicText();
  // Clear animation interval while typing
  clearInterval(animationInterval);
  // Restart animation interval after typing stops
  setTimeout(() => {
    if (animateFonts) {
      updateAnimationInterval();
    }
  }); // 1s delay
});

// Listen for input events on the speed input field
speedInput.addEventListener("input", updateAnimationInterval);

const sliderContainer = document.querySelector(".slider-container");

// Toggle font animation
toggleButton.addEventListener("click", () => {
  animateFonts = !animateFonts;
  toggleButton.classList.toggle("on");
  sliderContainer.classList.toggle("hidden");
  if (animateFonts) {
    updateAnimationInterval();
  } else {
    clearInterval(animationInterval);
  }
});

// Initialize toggle button state
toggleButton.classList.add("on"); // set initial state to on
sliderContainer.classList.remove("hidden"); // ensure slider is visible initially
