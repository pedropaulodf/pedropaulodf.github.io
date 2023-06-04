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

function setAnoFooter(variable) {
  var s = document.getElementById(variable);
  s.value = new Date().getFullYear().toString();
}
