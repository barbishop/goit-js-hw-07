function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const divCont = document.querySelector('#boxes');

function createBoxes(amount) {
  divCont.innerHTML = '';
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    divCont.appendChild(div);
    size += 10;
  }
}

function destroyBoxes() {
  divCont.innerHTML = '';
}

btnCreate.addEventListener('click', handleCreate);

function handleCreate() {
  const amount = Number(inputEl.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
}

btnDestroy.addEventListener('click', handleDestroy);

function handleDestroy() {
  destroyBoxes();
}
