const body = document.querySelector("body");
const menubtn = document.querySelector(".menubtn");
const signupBtn = document.querySelector(".signup");
const modal = document.querySelector(".modal-container");
const closeBtn = document.querySelector("#close");

// menu ac kapa fonksiyonu
function navOpen() {
  body.classList.toggle("navFixBody");
}

//modal acma fonksiyonu
function modalAc() {
  modal.classList.remove("displayNone");
  modal.classList.add("modalGoster");
}

//modal kapa fonksiyonu 
function modalKapa() {
  modal.classList.remove("modalGoster");
  modal.classList.add("displayNone");
}

//modal acıkken sayfada boş yere tıklayınca modal kapama
window.addEventListener("click", function (e) {
  e.target === modal && modalKapa();
});

//eventlisteners
signupBtn.addEventListener("click", modalAc);
closeBtn.addEventListener("click", modalKapa);
menubtn.addEventListener("click", navOpen);

