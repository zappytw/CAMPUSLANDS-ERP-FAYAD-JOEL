const returnButton = document.getElementById("return_Button")
const signinButton = document.getElementById("signin_Button")
const loginButton = document.getElementById("login_Button")
const loginForm = document.getElementById("login_Form")
const signinForm = document.getElementById("signin_Form")
const hideableLoginLeft = document.getElementById("hideableLoginLeft")
const hideableLoginRight = document.getElementById("hideableLoginRight")
const smallContainer = document.querySelectorAll(".smallcontainer")
const blurContainer = document.querySelectorAll(".blurcontainer")
const signinFormElement = document.getElementById("signin_Form");
const loginFormElement = document.getElementById("login_Form")
let campers = JSON.parse(localStorage.getItem("campers")) || [];
returnButton.addEventListener("click", hideLogin);

signinButton.addEventListener("click", showSignin);
signinButton.addEventListener("click", hideLogin);

loginButton.addEventListener("click",showLogin);
loginButton.addEventListener("click",hideSignin);

function showLogin() {
  returnButton.classList.remove("hidden")
  loginForm.classList.remove("hidden")
  hideableLoginRight.classList.add("hidden")
  hideableLoginLeft.classList.remove("hidden")
signinForm.classList.add("hidden")
  smallContainer.forEach(container => {
      container.classList.remove("tallSmallContainer");
  });
blurContainer.forEach(container => {
      container.classList.remove("tallSmallContainer");
  });
}
function hideLogin() {
  returnButton.classList.add("hidden")
  loginForm.classList.add("hidden")
  hideableLoginRight.classList.remove("hidden")
}
function showSignin() {
  hideableLoginLeft.classList.add("hidden")
  signinForm.classList.remove("hidden")
  smallContainer.forEach(container => {
        container.classList.add("tallSmallContainer");
    });
  blurContainer.forEach(container => {
        container.classList.add("tallSmallContainer");
    });
}
function hideSignin(){
  hideableLoginLeft.classList.remove("hidden")
  signinForm.classList.add("hidden")
smallContainer.forEach(container => {
      container.classList.remove("tallSmallContainer");
  });
blurContainer.forEach(container => {
      container.classList.remove("tallSmallContainer");
  });
}

signinForm.addEventListener("submit",function(event){
  event.preventDefault()

  let camper = {
    fname: document.getElementById("inputFName").value,
    lname: document.getElementById("inputLName").value,
    idNum: document.getElementById("inputId").value,
    adress: document.getElementById("inputAddress").value,
    guardian: document.getElementById("inputGuardian").value,
    phone: document.getElementById("inputPhone").value,
    user: document.getElementById("inputUser").value,
    pass: document.getElementById("inputPass").value,
  }
let signInFindUser = campers.find(u => u.user === camper.user)
if (signInFindUser){
  alert("Este usuario ya està registrado!")
} else{
  alert('Registro Guardado!');
  campers.push(camper)
  localStorage.setItem("campers", JSON.stringify(campers))
  signinForm.reset
  hideSignin()
}
});

  loginForm.addEventListener("submit", function(event){
    event.preventDefault()
    let loginAttempt = {
      user:document.getElementById("inputUserLogin").value,
      pass:document.getElementById("inputPassLogin").value,
    }
try {
    let loginFindUser = campers.find(u => u.user === loginAttempt.user)
    let loginFindPass = loginFindUser.pass === loginAttempt.pass
    if (loginFindUser && loginFindPass){
      alert("Sesiòn iniciada!")
      window.location.href("pantallaPrincipalEstudiante.html")
    } else {
      alert('Credenciales incorrectas!');
    }
} catch(usuarioInexistente) {
  alert('El usuario no existe');
}
    });

