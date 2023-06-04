const spanMessageCopiadoEmail = document.querySelector(".email");

function copiarTexto(value) {
  const durationVisible = 1500;
  navigator.clipboard.writeText(value);
  spanMessageCopiadoEmail.style.opacity = 1;
  setTimeout(() => {
    spanMessageCopiadoEmail.style.opacity = 0;
  }, durationVisible);
}

VanillaTilt.init(document.querySelector(".your-element"), {
  max: 25,
  speed: 400,
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".your-element"));

window.onload = function () {
  myFunction();
};

function myFunction() {
  document.getElementById("footerAno").innerHTML = new Date()
    .getFullYear()
    .toString();
}
