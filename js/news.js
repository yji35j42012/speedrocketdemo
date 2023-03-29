// normal_select
var selectHandler = document.querySelectorAll("[name=selectHandler]");
var selectHandlerItem = null;
for (let i = 0; i < selectHandler.length; i++) {
	const element = selectHandler[i];
	console.log("element", element);
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
