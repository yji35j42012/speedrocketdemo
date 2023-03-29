// normal_select
var selectHandler = document.querySelectorAll("[name=selectHandler]");
for (let i = 0; i < selectHandler.length; i++) {
	const element = selectHandler[i];
	console.log("element", element);

	element.onclick = function() {
		console.log("selectHandler");
	};
}
