const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    window.scrollTo(0, 0);
    splash.classList.add('hidden');
  }, 1500)
})