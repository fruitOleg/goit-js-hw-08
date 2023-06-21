import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const formEmailEl = document.getElementsByName('email');
const formTextEl = document.getElementsByName('message');
const dataForm = {};

formEl.addEventListener('submit', submitUserForm);
formEl.addEventListener('input', throttle(inputFeedbackForm, 500));

saveDataUser();

function inputFeedbackForm(evt) {
  dataForm[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function saveDataUser() {
  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (saveData) {
    formEmailEl.value = saveData.email || '';
    formTextEl.value = saveData.message || '';
  }
}

function submitUserForm(evt) {
  evt.preventDefault();

  const emailUser = evt.target.email.value;
  const textUser = evt.target.message.value;

  if (emailUser === '' || textUser === '') {
    return false;
  }
  evt.target.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
}
