const spanMessageCopiadoEmail = document.querySelector(".email");

function copiarTexto(value) {
  const durationVisible = 1500;
  navigator.clipboard.writeText(value);
  spanMessageCopiadoEmail.style.opacity = 1;
  setTimeout(() => {
    spanMessageCopiadoEmail.style.opacity = 0;
  }, durationVisible);
}

// $('.js-tilt').tilt({
//   scale: 1.11,
//   glare: true,
//   maxGlare: .5
// });

	VanillaTilt.init(document.querySelector(".your-element"), {
		max: 25,
		speed: 400,
	});
	
	//It also supports NodeList
	VanillaTilt.init(document.querySelectorAll(".your-element"));