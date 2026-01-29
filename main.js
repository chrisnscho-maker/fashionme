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
