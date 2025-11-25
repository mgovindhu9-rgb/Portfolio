// Dark/Light Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Project alert
function showAlert(name){ alert(`You clicked on ${name}`); }

// Scroll reveal
const revealElements = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  revealElements.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 50){ el.classList.add('active'); }
  });
});
window.addEventListener('load', () => { revealElements.forEach(el => el.classList.add('active')); });
