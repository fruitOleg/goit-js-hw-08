import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const formEmailEl = document.getElementsByName('email');
const formTextEl = document.getElementsByName('message');
const dataForm = {};

formEl.addEventListener('submit', submitUserForm);
formEl.addEventListener('input', throttle(inputFeedbackForm, 500));

saveDataUser();

function inputFeedbackForm(evt) {
  dataForm[evt.target.name] = evt.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

function saveDataUser() {
  const saveData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (saveData.email) {
    formEmailEl.value = saveData.email || ' ';
  }
  if (saveData.message) {
    formTextEl.value = saveData.message || ' ';
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
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
}
