var lang = document.querySelector("#lang");
var lang_group = document.querySelector(".lang_group");
var lang_txt = document.querySelector("#lang_txt");
var lang_group_item = document.querySelectorAll(".lang_group > li");
function langHnadler() {
	lang.classList.contains("on")
		? lang.classList.remove("on")
		: lang.classList.add("on");
}
lang.addEventListener("click", langHnadler);

for (let i = 0; i < lang_group_item.length; i++) {
	const element = lang_group_item[i];
	element.onclick = function () {
		event.stopPropagation();
		lang_txt.innerHTML = element.innerHTML;
		lang.classList.remove("on");
	};
}

// nav

var nav_btn = document.querySelector("#nav_btn");
var nav_box = document.querySelector("#nav_box");
nav_btn.onclick = function () {
	nav_box.classList.contains("on")
		? nav_box.classList.remove("on")
		: nav_box.classList.add("on");
};

var secNav = document.querySelectorAll("[name=secNav]");
var secNav_li = document.querySelectorAll("[name=secNav] > li");
var secNavNum = null;
for (let i = 0; i < secNav.length; i++) {
	const element = secNav[i];
	element.onclick = function () {
		if (secNavNum == i) {
			secNav[secNavNum].classList.remove("on");
			secNavNum = null;
		} else if (secNavNum == null) {
			secNav[i].classList.add("on");
			secNavNum = i;
		} else {
			secNav[secNavNum].classList.remove("on");
			secNav[i].classList.add("on");
			secNavNum = i;
		}
	};
}

// gotoback
var gotoback = document.querySelector("#gotoback");
gotoback.onclick = function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
};

let favicon = document.querySelector('link[rel="shortcut icon"]');
let isDarkMode = false;
isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

var html = document.querySelector("html")

if (isDarkMode || html.getAttribute("native-dark-active") !== null) {
	favicon.href = "../favicon-dark.ico";
} else {
	favicon.href = "../favicon-light.ico";
}
