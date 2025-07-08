const themeToggle = document.getElementById('themeToggle');

  function toggleMode() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    themeToggle.textContent = isLight ? '🌙 Dark Mode' : '☀️ Light Mode';
    localStorage.setItem('mode', isLight ? 'light' : 'dark');
  }

  window.onload = () => {
    const isLight = localStorage.getItem('mode') === 'light';
    if (isLight) {
      document.body.classList.add('light-mode');
    }
    themeToggle.textContent = isLight ? '🌙 Dark Mode' : '☀️ Light Mode';
  };