import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const formEmailEl = document.getElementsByName('email');
const formTextEl = document.getElementsByName('message');
const dataForm = {};

formEl.addEventListener('submit', submitUserForm);
formEl.addEventListener('input', throttle(inputFeedbackForm, 500));

saveDataUser();

function submitUserForm(evt) {
  evt.preventDefault();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function inputFeedbackForm(evt) {
  dataForm[evt.target.name] = evt.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

function saveDataUser() {
  const saveData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (saveData) {
    formEmailEl.value = saveData.email || '';
    formTextEl.value = saveData.message || '';
  }
}
