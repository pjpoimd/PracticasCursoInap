document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('discoverBtn').addEventListener('click', () => {
  document.getElementById('que-ver').scrollIntoView({ behavior: 'smooth' });
});
