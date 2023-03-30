// normal_select
var selectHandler = document.querySelectorAll("[name=selectHandler]");
var selectHandlerItem = null;
for (let i = 0; i < selectHandler.length; i++) {
	const element = selectHandler[i];
	// console.log("element", element);
	// selectHandlerItem == null ?'' :selectHandler[selectHandlerItem].classList.remove
	element.onclick = function() {
		console.log("selectHandler");
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
		// selectHandlerItem == null
		// 	? ""
		// 	: selectHandler[selectHandlerItem].classList.remove("on");
		// element.classList.add("on");
		// selectHandlerItem = i;
	};
}

var page_group_more = document.querySelector("#page_group_more");
var page_goPage = document.querySelector("#page_goPage");
var page_goPage_input = document.querySelector("#page_goPage input");
page_group_more.onclick = function() {
	page_group_more.classList.contains("on")
		? page_group_more.classList.remove("on")
		: page_group_more.classList.add("on");
	page_goPage_input.focus();
};
page_goPage.onclick = function() {
	event.stopPropagation();
};
