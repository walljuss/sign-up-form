const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const passMessage = document.querySelector('#pass');

password1.addEventListener('change', () => {
  if (password1.value !== password2.value) {
    passMessage.innerHTML = "passwords do not match"
  } else {
    passMessage.innerHTML = "";
  }
})

password2.addEventListener('change', () => {
  if (password1.value !== password2.value) {
    passMessage.innerHTML = "passwords do not match"
  } else {
    passMessage.innerHTML = "";
  }
})

