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