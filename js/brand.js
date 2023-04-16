var banner = document.querySelector("#banner_group");
var banner_pic = document.querySelectorAll("#banner_group > .banner_item");
var banner_prev = document.querySelector("#banner_prev");
var banner_next = document.querySelector("#banner_next");
var banner_count = 1;
var banner_moveNum = -100 * banner_count;
var banner_maxCount = banner_pic.length;
var banner_time = 6; //6秒
let bannerTime = null;
var banner_dots = document.querySelector("#banner_dots");
var banner_dots_item = null;

function bannerTimeHandler() {
	bannerTime = setInterval(() => {
		banner_count++;
		banner_moveNum = -100 * banner_count;
		banner_moveHandler();
		dotsHandler()
		resetTime();
	}, banner_time * 1000);
}
banner_next.onclick = function () {
	banner_count++;
	banner_moveNum = -100 * banner_count;
	banner_moveHandler();
	resetTime();
	dotsHandler()
};
banner_prev.onclick = function () {
	banner_count--;
	banner_moveNum = -100 * banner_count;
	banner_moveHandler();
	resetTime();
	dotsHandler()
};
function resetTime() {
	clearInterval(bannerTime);
	bannerTimeHandler();
	if (banner_count == banner_maxCount + 1) {
		goFirst();
	} else if (banner_count == 0) {
		goEnd()
	}
}
// 快速換回第一張
function goFirst() {
	setTimeout(() => {
		banner_count = 1;
		banner_moveNum = -100 * banner_count;
		banner.style = `transform: translateX(${banner_moveNum}%);transition-duration: 0;opacity:1;`;
	}, 350);
}
// 快速換回最後一張
function goEnd() {
	setTimeout(() => {
		banner_count = banner_maxCount;
		banner_moveNum = -100 * banner_count;
		banner.style = `transform: translateX(${banner_moveNum}%);transition-duration: 0;opacity:1;`;
	}, 350);
}
function banner_moveHandler() {
	banner.style = `transform: translateX(${banner_moveNum}%);transition-duration: 0.3s;opacity:1;`;
}
function pushStart() {
	var getImg = document.querySelector(
		"#banner_group > .banner_item:last-child img"
	);
	const liStart = document.createElement("li");
	liStart.setAttribute("class", "banner_item");
	const child = document.createElement("img");
	child.setAttribute("src", getImg.getAttribute("src"));
	liStart.append(child);
	banner.insertBefore(liStart, banner_pic[0]);
}
function pushEnd() {
	var getImg = document.querySelector(
		"#banner_group > .banner_item:nth-child(2) img"
	);
	const liEnd = document.createElement("li");
	liEnd.setAttribute("class", "banner_item");
	const child = document.createElement("img");
	child.setAttribute("src", getImg.getAttribute("src"));
	liEnd.append(child);
	banner.appendChild(liEnd, banner_pic[0]);
}
function pushDots() {
	for (let i = 0; i < banner_maxCount; i++) {
		const liDot = document.createElement("li");
		liDot.setAttribute("class", "normal_dots_item");
		banner_dots.append(liDot)
	}
	banner_dots_item = document.querySelectorAll("#banner_dots >li");
	dotsHandler()
	dotItem()
}
function dotsHandler() {
	allDotsRemove()
	if (banner_count == 1) {
		banner_dots_item[banner_count - 1].classList.add("on");
	} else if (banner_count == 0) {
		banner_dots_item[banner_maxCount - 1].classList.add("on");
	} else if (banner_count > banner_maxCount) {
		banner_dots_item[0].classList.add("on");
	} else {
		banner_dots_item[banner_count - 1].classList.add("on");
	}
}
function dotItem() {
	for (let i = 0; i < banner_dots_item.length; i++) {
		const element = banner_dots_item[i];
		element.onclick = function () {
			banner_count = i + 1
			banner_moveNum = -100 * banner_count;
			banner_moveHandler()
			dotsHandler()
			resetTime();
		}
	}
}
function allDotsRemove() {
	for (let i = 0; i < banner_dots_item.length; i++) {
		const element = banner_dots_item[i];
		element.classList.remove('on')
	}
}



setTimeout(() => {
	pushStart();
	pushEnd();
	banner_moveHandler();
	pushDots()
}, 100);

bannerTimeHandler();
