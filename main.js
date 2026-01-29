// Image preview handler
const inputs = document.querySelectorAll('input[type="file"]');

inputs.forEach(input => {
  input.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      const preview = document.getElementById(`${event.target.id}-preview`);
      if (preview) {
        preview.src = URL.createObjectURL(file);
      }
    }
  });
});

// Theme toggle handler
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Function to set theme
const setTheme = (theme) => {
  htmlElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
});

// Avatar control handler
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');

function updateAvatar() {
  const height = parseInt(heightInput.value, 10) || 170; // Default height 170cm
  const weight = parseInt(weightInput.value, 10) || 70; // Default weight 70kg

  // Simple mapping:
  // Height: 100cm -> 100px, 200cm -> 200px. Base height of 100px.
  const avatarHeight = Math.max(50, height * 0.8);

  // Width: At 70kg, scale is 1. More weight = wider.
  // This is a non-linear scaling for a more noticeable effect.
  const avatarWidthScale = Math.pow(weight / 70, 1.5);

  document.documentElement.style.setProperty('--avatar-height', `${avatarHeight}px`);
  document.documentElement.style.setProperty('--avatar-width-scale', avatarWidthScale);
}

if (heightInput && weightInput) {
    heightInput.addEventListener('input', updateAvatar);
    weightInput.addEventListener('input', updateAvatar);

    // Initial call to set avatar size
    updateAvatar();
}
