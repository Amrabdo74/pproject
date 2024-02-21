let switchBtn = document.querySelector(".switch-btn");
switchBtn.onclick = () => {
  let registerForm = document.querySelector(".register");
  let loginForm = document.querySelector(".login");
  registerForm.classList.toggle("hide-form");
  loginForm.classList.toggle("hide-form");
  loginForm.classList.contains("hide-form")
    ? (switchBtn.innerHTML = "Login")
    : (switchBtn.innerHTML = "Register");
};
