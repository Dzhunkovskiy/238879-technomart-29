const modalFeedback = document.querySelector(".feedback-form-wrapper");
const lostButton = document.querySelector(".lost-button");
const modalMap = document.querySelector(".modal-map");
const map = document.querySelector(".map-image");
const feedbackClose = document.querySelector(".feedback-close");
const mapClose = document.querySelector(".map-close");
const modalCart = document.querySelector(".modal-cart-wrapper");
const closeCart = document.querySelector(".close-cart-modal");
const buyButton = document.querySelector(".buy-button");


lostButton.addEventListener("click", function (evt) {
	modalFeedback.classList.add("modal-show");
	if (modalMap.classList.contains("modal-show")){
		modalMap.classList.remove("modal-show");
	}
});

feedbackClose.addEventListener("click", function (evt) {
	modalFeedback.classList.remove("modal-show");
});

map.addEventListener("click", function (evt) {
	modalMap.classList.add("modal-show");
	if (modalFeedback.classList.contains("modal-show")){
		modalFeedback.classList.remove("modal-show");
	}
});

mapClose.addEventListener("click", function (evt) {
	modalMap.classList.remove("modal-show");
});

buyButton.addEventListener("click", function (evt) {
	modalCart.classList.add("modal-show");
});

closeCart.addEventListener("click", function (evt) {
	modalCart.classList.remove("modal-show");
});