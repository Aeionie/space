const container = document.getElementById('container');
const loginButton = document.getElementById('login');
const registerButton = document.getElementById('register');
const overlayContainer = document.querySelector('.overlay-container');
const newSpace = document.getElementById('newToSpace'); // Fix the typo here

loginButton.addEventListener('click', () => {
  container.classList.remove('active');
  overlayContainer.classList.remove('overlay-container-active');
});

registerButton.addEventListener('click', () => {
  container.classList.add('active');
  overlayContainer.classList.add('overlay-container-active');
});

newSpace.addEventListener('click', () => {
  container.classList.add('active');
  overlayContainer.classList.add('overlay-container-active');
});
