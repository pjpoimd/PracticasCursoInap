document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  const discoverBtn = document.getElementById('discoverBtn');
  const placesSection = document.getElementById('que-ver');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (discoverBtn && placesSection) {
    discoverBtn.addEventListener('click', () => {
      placesSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
