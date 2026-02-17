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
signinFormElement.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = {
        nombres: document.getElementById("inputFName").value,
        apellidos: document.getElementById("inputLName").value,
        identificacion: document.getElementById("inputId").value,
        direccion: document.getElementById("inputAddress").value,
        acudiente: document.getElementById("inputGuardian").value,
        telefono: document.getElementById("inputPhone").value,
        email: document.getElementById("inputUser").value,
        pass: document.getElementById("inputPass").value,
        
    };

    localStorage.setItem("datosUsuario", JSON.stringify(usuario));

    alert("¡Registro guardado!");
    
    signinFormElement.reset();
    hideSignin(); 
});
loginFormElement.addEventListener("submit", (e) => {
    let usuario = JSON.parse(localStorage.getItem("datosUsuario"));
    e.preventDefault();
    let usuarioLogin = {
        emailLogin: document.getElementById("inputUserLogin").value,
        passLogin: document.getElementById("inputPassLogin").value,
    };
    if (usuarioLogin.emailLogin == usuario.email && usuarioLogin.passLogin == usuario.pass){
      window.location.href="pantallaPrincipalEstudiante.html"
    } else{
      alert("Credenciales incorrectas!")
    }
  })
