const spanMessageCopiadoEmail = document.querySelector(".email");
const spanMessageCopiadoDiscord = document.querySelector(".discord");

function copiarTexto(value, local) {
  const durationVisible = 1500;
  navigator.clipboard.writeText(value);
  if (local === 1) {
    spanMessageCopiadoEmail.style.opacity = 1;
    setTimeout(() => {
      spanMessageCopiadoEmail.style.opacity = 0;
    }, durationVisible);
  } else if (local === 2) {
    spanMessageCopiadoDiscord.style.opacity = 1;
    setTimeout(() => {
      spanMessageCopiadoDiscord.style.opacity = 0;
    }, durationVisible);
  }
}
