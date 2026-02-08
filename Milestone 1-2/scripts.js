const toggleButton = document.getElementById('button');
const skills = document.getElementById('skills');

toggleButton.addEventListener('click', () => {
  const isHidden = window.getComputedStyle(skills).display === 'none';
  skills.style.display = isHidden ? 'block' : 'none';
});
