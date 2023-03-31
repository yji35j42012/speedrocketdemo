// normal_select
var selectHandler = document.querySelectorAll("[name=selectHandler]");
var page_input = document.querySelectorAll("[name=page_input]");


var selectHandlerItem = null;
for (let i = 0; i < selectHandler.length; i++) {
	const element = selectHandler[i];
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

var page_group_more = document.querySelectorAll("[name=page_group_more]");
var more_item = null;
console.log("page_group_more", page_group_more);

for (let i = 0; i < page_group_more.length; i++) {
	const element = page_group_more[i];
	element.onclick = function() {
		if (more_item == i) {
			page_group_more[more_item].classList.remove("on");
			more_item = null;
		} else if (more_item == null) {
			page_group_more[i].classList.add("on");
			page_input[i].focus();
			more_item = i;
		} else {
			page_group_more[more_item].classList.remove("on");
			page_group_more[i].classList.add("on");
			page_input[i].focus();
			more_item = i;
		}
	};
}
var page_goPage = document.querySelectorAll("[name=page_goPage]");
for (let i = 0; i < page_goPage.length; i++) {
	const element = page_goPage[i];
	element.onclick = function() {
		event.stopPropagation();
	};
}

