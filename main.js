document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  let email = document.getElementById('email').value;

  if (emailValid(email)) {
    sessionStorage.setItem("email",email);
    window.location.href = 'iniciopokeapi.html'
    } else {
     alert("todo es incorrecto");
    }
   
   });
  
   function emailValid(email) {
    let emailRegex = /\S+\.\S+/;
    return emailRegex.test(email);
   };