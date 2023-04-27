var searchInpBox = document.querySelector("#searchInpBox");
var searchInp = document.querySelector("#searchInp");
var searchHandler = document.querySelector("#searchHandler");

searchInp.addEventListener("focus", function() {
	searchInpBox.classList.add("_in");
});
searchInp.addEventListener("blur", function() {
	setTimeout(() => {
		searchInpBox.classList.remove("_in");
	}, 100);
});
searchHandler.onclick = function(params) {
	setTimeout(() => {
		searchInp.blur();
	}, 100);
	searchInpBox.classList.remove("_in");
};

var selectHandler = document.querySelectorAll("[name=selectHandler]");
var page_input = document.querySelectorAll("[name=page_input]");
var selectHandlerItem = null;
for (let i = 0; i < selectHandler.length; i++) {
	const element = selectHandler[i];
	element.onclick = function() {
		if (selectHandlerItem == i) {
			selectHandler[selectHandlerItem].classList.remove("on");
			selectHandlerItem = null;
		} else if (selectHandlerItem == null) {
			selectHandler[i].classList.add("on");
			selectHandlerItem = i;
		} else {
			selectHandler[selectHandlerItem].classList.remove("on");
			selectHandler[i].classList.add("on");
			selectHandlerItem = i;
		}
	};
}