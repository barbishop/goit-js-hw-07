const userNameInput = document.querySelector('#name-input');
const userNameOutput = document.querySelector('#name-output');

function handleInput(event) {
  const input = event.target.value.trim();
  userNameOutput.textContent = input || 'Anonymous';
}

userNameInput.addEventListener('input', handleInput);
