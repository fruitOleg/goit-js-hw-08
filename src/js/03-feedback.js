import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');

let dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

formEl.addEventListener('submit', submitUserForm);
formEl.addEventListener('input', throttle(inputFeedbackForm, 500));

saveDataUser();

function inputFeedbackForm(evt) {
  dataForm[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function saveDataUser() {
  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const { email, message } = formEl.elements;

  if (saveData) {
    email.value = saveData.email || '';
    message.value = saveData.message || '';
  }
}

function submitUserForm(evt) {
  evt.preventDefault();

  const { email, message } = evt.target.elements;

  if (email.value === '' || message.value === '') {
    alert('Не всі поля заповнені!');
    return;
  }
  evt.target.reset();
  console.log(dataForm);
  localStorage.removeItem(STORAGE_KEY);
  dataForm = {};
}
