const form = document.querySelector('.login-form');
console.log(form);

function formHandler(event) {
  event.preventDefault();

  if (
    event.target.email.value.trim() == '' ||
    event.target.password.value.trim() == ''
  ) {
    alert('All form fields must be filled in');
  } else {
    const data = {
      email: event.target.email.value.trim(),
      password: event.target.password.value.trim(),
    };

    console.log(data);
    form.reset();
  }
}

form.addEventListener('submit', formHandler);
