function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElement = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const divCont = document.querySelector('#boxes');

btnCreate.addEventListener('click', handleCreate);
btnDestroy.addEventListener('click', handleDestroy);

function createBoxes(amount) {
  let count = 30;
  let boxes = '';
  let color = getRandomHexColor();

  for (let i = 0; i < amount; i++) {
    boxes += `<div 
    id="box" 
    style="width:${count}px; 
    height:${count}px; 
    background-color:${color}"
    >
    </div>`;

    color = getRandomHexColor();
    count += 10;
  }

  divCont.innerHTML = boxes;
}

function destroyBoxes() {
  divCont.innerHTML = '';
}

btnCreate.addEventListener('click', handleCreate);

function handleCreate() {
  const amount = Number(inputElement.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputElement.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
}

btnDestroy.addEventListener('click', handleDestroy);

function handleDestroy() {
  destroyBoxes();
}
