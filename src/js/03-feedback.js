import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const formEmailEl = document.querySelector('.email');
const formTextEl = document.querySelector('.message');

formEl.addEventListener('submit', submitUserForm);
formEl.addEventListener('input', throttle(inputFeedbackForm, 500));

saveDataUser();

function submitUserForm(event) {
  event.preventDefault;

  console.log(JSON.parce(localStorage.getItem('feedback-form-state')));

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function inputFeedbackForm(event) {
  const dataForm = {};
  dataForm[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

function saveDataUser() {
  const saveData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (saveData) {
    formEmailEl.value = saveData.email || '';
    formTextEl.value = saveData.message || '';
  }
}
