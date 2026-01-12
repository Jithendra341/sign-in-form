const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Listner to submit button
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  checkinputs();
});

// Function to check inputs

function checkinputs(){
  const usernameValue=username.value.trim();
  const emailValue=email.value.trim();
  const passwordValue=password.value.trim();
  const password2Value=password2.value.trim();
if (usernameValue === '') {
  document.getElementsByName('small').innerHTML;
}else {
  setSuccessFor(username);
}

}
