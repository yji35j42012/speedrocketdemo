var searchInpBox = document.querySelector("#searchInpBox");
var searchInp = document.querySelector("#searchInp");
var searchHandler = document.querySelector("#searchHandler");
var office_area = document.querySelector("#office_area");
var nodata = document.querySelector("#nodata");

searchInp.addEventListener("focus", function() {
	searchInpBox.classList.add("_in");
});
searchInp.addEventListener("blur", function() {
	setTimeout(() => {
		searchInpBox.classList.remove("_in");
	}, 100);
});
searchHandler.onclick = function(event) {
	console.log("nodata.style.display", nodata.style.display);

	if (!searchInpBox.classList.contains("_in")) {
		return;
	} else {
		if (nodata.style.display == "none") {
			nodata.style.display = "";
			office_area.style.display = "none";
		} else {
			nodata.style.display = "none";
			office_area.style.display = "";
		}

		searchInpBox.classList.remove("_in");
		setTimeout(() => {
			searchInp.blur();
		}, 100);
	}
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
