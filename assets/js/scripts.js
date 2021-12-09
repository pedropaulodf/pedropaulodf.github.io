const spanMessageCopiadoEmail = document.querySelector(".email");

function copiarTexto(value) {
  const durationVisible = 1500;
  navigator.clipboard.writeText(value);
  spanMessageCopiadoEmail.style.opacity = 1;
  setTimeout(() => {
    spanMessageCopiadoEmail.style.opacity = 0;
  }, durationVisible);
}
