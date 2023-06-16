function getRandomFontFamily() {
  // Array of font family names
  var fonts = [
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

  // Generate a random index to select a font family from the array
  var randomIndex = Math.floor(Math.random() * fonts.length);
  return fonts[randomIndex];
}

function updateFontFamily(element) {
  // Get the current font family of the element
  var currentFont = element.style.fontFamily;
  // Get a random font family
  var randomFont = getRandomFontFamily();

  // Update the font family if it's different from the current one
  if (currentFont !== randomFont) {
    element.style.fontFamily = randomFont;
  }
}

function setInitialFontFamilies() {
  var elements = document.querySelectorAll(".letter");

  // Set the font family for the first three spans
  for (var i = 0; i < 3; i++) {
    var element = elements[i];
    var font = getRandomFontFamily();
    element.style.fontFamily = font;
  }

  // Set the font family for the remaining spans
  for (var i = 3; i < elements.length; i++) {
    var element = elements[i];
    var font = getRandomFontFamily();
    element.style.fontFamily = font;
  }
}

var animationId; // Store the animation ID for canceling
var startTime; // Track the start time of hovering

var elements = document.querySelectorAll(".letter");

// Add event listeners for hover events on each letter
elements.forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    startTime = performance.now(); // Get the current time when hovering starts

    function animateFontChange(timestamp) {
      // Calculate the elapsed time since hovering started
      var elapsedTime = timestamp - startTime;

      // Calculate the animation speed based on the elapsed time
      var speed = Math.max(0.5 - elapsedTime * 0.00005, 0.05); // Maximum speed of 0.5 seconds (slower animation)

      // Update the font family for the hovered element
      updateFontFamily(element);

      // Continue the animation if the speed is greater than 0
      if (speed > 0) {
        animationId = requestAnimationFrame(animateFontChange);
      }
    }

    // Start the animation loop
    animateFontChange(performance.now());
  });

  element.addEventListener("mouseleave", function () {
    cancelAnimationFrame(animationId); // Cancel the animation when hovering ends
  });
});

// Set the initial font families
setInitialFontFamilies();

setInterval(function () {
  // Update the font family for each letter
  elements.forEach(function (element) {
    updateFontFamily(element);
  });
}, 1900);
