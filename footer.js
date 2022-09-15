const date = new Date();
const year = date.getFullYear();

const span = document.querySelector('.year');
span.textContent = ` @ ${year}`;