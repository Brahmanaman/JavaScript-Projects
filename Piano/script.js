let keys = document.querySelectorAll(".key");
let pressedKeys = new Set();

function playsound(key) {
	let path = `./sounds/${key}.mp3`;
	let music = new Audio(path);
	music.play();
}

window.addEventListener("keydown", function (e) {
	let keyPressed = e.key.toUpperCase();
	if (pressedKeys.has(keyPressed)) return;
	pressedKeys.add(keyPressed);

	[...keys].forEach((key) => {
		if (key.textContent.toLocaleUpperCase() == keyPressed) {
			let wrapper = key.parentElement;
			wrapper.classList.add("active");
			playsound(keyPressed);
		}
	});
});

window.addEventListener("keyup", function (e) {
	let keyReleased = e.key.toUpperCase();
	pressedKeys.delete(keyReleased);

	[...keys].forEach((key) => {
		if (key.textContent.toLocaleUpperCase() == e.key.toLocaleUpperCase()) {
			let wrapper = key.parentElement;
			wrapper.classList.remove("active");
		}
	});
});


keys.forEach(key => {
    key.addEventListener("mousedown", () => {
        key.parentElement.classList.add("active");
        playsound(key.dataset.key.toUpperCase());
    });

    key.addEventListener("mouseup", () => {
        key.parentElement.classList.remove("active");
    });

});