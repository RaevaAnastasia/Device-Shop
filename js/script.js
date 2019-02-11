var link = document.querySelector(".contacts-link");
var popup = document.querySelector(".modal_feedback");
var close = popup.querySelector(".button_close");
var username = popup.querySelector(".feedback-field-username");
var form = popup.querySelector(".feedback-form");
var email = popup.querySelector(".feedback-field-email");
var feedback = popup.querySelector(".feedback-field-content");

var isStorageSupport = true;
var storage = "";
  
 try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal_show")
	if (storage) {
		username.value = storage;
		email.focus();
	} else {
		username.focus();
	}	
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal_show");
	popup.classList.remove("modal-error");
});


form.addEventListener("submit", function (evt) {
	if (!username.value || !email.value || !feedback.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
		localStorage.setItem("username", username.value);
		localStorage.setItem("email", email.value);
		}
	}	 
});

window.addEventListener ("keydown", function (evt) {
	if (evt.keyCode == 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal_show")) {
			popup.classList.remove("modal_show");
			popup.classList.remove("modal-error");
		}
	}
});