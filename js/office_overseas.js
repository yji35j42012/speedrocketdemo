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