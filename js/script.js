var link = document.querySelector(".login"),
		popup = document.querySelector(".modal-content"),
		overlay = document.querySelector(".modal-overlay"),
		close = popup.querySelector(".modal-content-close"),
		form = popup.querySelector("form"),
		login = popup.querySelector("[name=login]"),
		password = popup.querySelector("[name=password]"),
		storage = localStorage.getItem("login"),
		mapOpen = document.querySelector(".js-open-map"),
		mapPopup = document.querySelector(".modal-content-map"),
		mapClose = mapPopup.querySelector(".modal-content-close");

// Форма входа
// Открытие с анимацией
link.addEventListener("click", function(event) {
	event.preventDefault();
	overlay.classList.add("modal-content-show");
	popup.classList.add("modal-content-show");
	popup.classList.add("modal-content-animation");
	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

// Закрытие формы по нажатию на крестик
close.addEventListener("click", function(event) {
	event.preventDefault();
	overlay.classList.remove("modal-content-show");
	popup.classList.remove("modal-content-show");
	popup.classList.remove("modal-content-animation");
	popup.classList.remove("modal-error");
});

// Закрытие формы или карты по нажатию 
// в любое место за пределами формы или карты
overlay.addEventListener("click", function(event) {
	event.preventDefault();
	overlay.classList.remove("modal-content-show");
	popup.classList.remove("modal-content-show");
	popup.classList.remove("modal-content-animation");
	popup.classList.remove("modal-error");
	mapPopup.classList.remove("modal-content-show");
	mapPopup.classList.remove("modal-content-animation");
});

// Ошибка, если хотя бы одно поле пустует
form.addEventListener("submit", function(event) {
	if (!login.value || !password.value) {
		event.preventDefault();
		popup.classList.remove("modal-error");
		popup.classList.remove("modal-content-animation");
		setTimeout(function() { popup.classList.add("modal-error") }, 1);	
	}	else {
		localStorage.setItem("login", login.value);
	}
});

// Закрытие формы или карты по нажатию на Esc
window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show") 
		|| mapPopup.classList.contains("modal-content-show")) {
			overlay.classList.remove("modal-content-show");
			popup.classList.remove("modal-content-show");
			popup.classList.remove("modal-content-animation");
			popup.classList.remove("modal-error");
			mapPopup.classList.remove("modal-content-show");
			mapPopup.classList.remove("modal-content-animation");
		}
	}
});

// Форма карты
// Открытие с анимацией
mapOpen.addEventListener("click", function(event) {
	event.preventDefault();
	overlay.classList.add("modal-content-show");
	mapPopup.classList.add("modal-content-show");
	mapPopup.classList.add("modal-content-animation");
});

// Закрытие карты по нажатию на крестик
mapClose.addEventListener("click", function(event) {
	event.preventDefault();
	overlay.classList.remove("modal-content-show");
	mapPopup.classList.remove("modal-content-show");
	mapPopup.classList.remove("modal-content-animation");
});
