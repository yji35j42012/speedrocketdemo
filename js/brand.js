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



var access = document.querySelector("#access_over_group");
var access_pic = document.querySelectorAll(
	"#access_over_group > .access_over_item"
);
var over_prev = document.querySelector("#over_prev");
var over_next = document.querySelector("#over_next");
var access_count = 1;
var access_moveNum = -100 * access_count;
var access_maxCount = Math.ceil(access_pic.length / 4);
var access_time = 6; //6秒
let accessTime = null;
var over_dots = document.querySelector("#over_dots");
var over_dots_item = null;
function accessTimeHandler() {
	accessTime = setInterval(() => {
		access_count++;
		access_moveNum = -100 * access_count;
		access_moveHandler();
		dotsAccessHandler();
		resetAccessTime();
	}, access_time * 1000);
}
function resetAccessTime() {
	clearInterval(accessTime);
	accessTimeHandler();
	if (access_count == access_maxCount + 1) {
		goAccessFirst();
	} else if (access_count == 0) {
		goAccessEnd();
	}
}
// // 快速換回第一張
function goAccessFirst() {
	setTimeout(() => {
		access_count = 1;
		access_moveNum = -100 * access_count;
		access.style = `transform: translateX(${access_moveNum}%);transition-duration: 0s;opacity:1;`;
	}, 350);
}
// // 快速換回最後一張
function goAccessEnd() {
	setTimeout(() => {
		access_count = access_maxCount;
		access_moveNum = -100 * access_count;
		access.style = `transform: translateX(${access_moveNum}%);transition-duration: 0s;opacity:1;`;
	}, 350);
}
function pushAccessStart() {
	let getImgS = (access_maxCount - 1) * 4;
	let getImgE = access_pic.length;
	let repair = access_maxCount * 4 - getImgE; //補
	for (let i = getImgS + 1; i < getImgE + 1; i++) {
		var getImg = document.querySelector(
			`#access_over_group > .access_over_item:nth-child(${i}) img`
		);
		var getImg2 = document.querySelector(
			`#access_over_group > .access_over_item:nth-child(${i}) img:nth-child(2)`
		);
		const liStart = document.createElement("li");
		liStart.setAttribute("class", "access_over_item");
		const child1 = document.createElement("img");
		child1.setAttribute("src", getImg.getAttribute("src"));
		child1.setAttribute("alt", getImg.getAttribute("alt"));
		child1.setAttribute("class", getImg.getAttribute("class"));
		const child2 = document.createElement("img");
		child2.setAttribute("src", getImg2.getAttribute("src"));
		child2.setAttribute("alt", getImg2.getAttribute("alt"));
		child2.setAttribute("class", getImg2.getAttribute("class"));
		liStart.append(child1);
		liStart.append(child2);
		access.insertBefore(liStart, access_pic[0]);
	}
	for (let i = 0; i < repair; i++) {
		const liStart = document.createElement("li");
		liStart.setAttribute("class", "access_over_item");
		access.insertBefore(liStart, access_pic[0]);
	}
}
function pushAccessEnd() {
	if (access_maxCount <= 1) {
		return;
	}
	for (let i = 1; i < 5; i++) {
		var getImg = document.querySelector(
			`#access_over_group > .access_over_item:nth-child(${i}) img`
		);
		var getImg2 = document.querySelector(
			`#access_over_group > .access_over_item:nth-child(${i}) img:nth-child(2)`
		);
		const liEnd = document.createElement("li");
		liEnd.setAttribute("class", "access_over_item");
		const child1 = document.createElement("img");
		child1.setAttribute("src", getImg.getAttribute("src"));
		child1.setAttribute("alt", getImg.getAttribute("alt"));
		child1.setAttribute("class", getImg.getAttribute("class"));
		const child2 = document.createElement("img");
		child2.setAttribute("src", getImg2.getAttribute("src"));
		child2.setAttribute("alt", getImg2.getAttribute("alt"));
		child2.setAttribute("class", getImg2.getAttribute("class"));
		liEnd.append(child1);
		liEnd.append(child2);
		access.appendChild(liEnd, access_pic[0]);
	}
}
over_next.onclick = function () {
	access_count++;
	access_moveNum = -100 * access_count;
	access_moveHandler();
	resetAccessTime();
	dotsAccessHandler();
};
over_prev.onclick = function () {
	access_count--;
	access_moveNum = -100 * access_count;
	access_moveHandler();
	resetAccessTime();
	dotsAccessHandler();
};
function access_moveHandler() {
	access.style = `transform: translateX(${access_moveNum}%);transition-duration: 0.3s;opacity:1;`;
}
function pushAccissDots() {
	for (let i = 0; i < access_maxCount; i++) {
		const liDot = document.createElement("li");
		liDot.setAttribute("class", "normal_dots_item");
		over_dots.append(liDot);
	}
	over_dots_item = document.querySelectorAll("#over_dots >li");
	dotsAccessHandler();
	dotAccessItem()
}
function dotsAccessHandler() {
	allDotsRemoveAccess();
	if (access_count == 1) {
		over_dots_item[access_count - 1].classList.add("on");
	} else if (access_count == 0) {
		over_dots_item[access_maxCount - 1].classList.add("on");
	} else if (access_count > access_maxCount) {
		over_dots_item[0].classList.add("on");
	} else {
		over_dots_item[access_count - 1].classList.add("on");
	}
}
function allDotsRemoveAccess() {
	for (let i = 0; i < over_dots_item.length; i++) {
		const element = over_dots_item[i];
		element.classList.remove("on");
	}
}
// 補上不足
function pushEpmt() {
	if (access_pic.length % 4 !== 0) {
		for (let i = 0; i < access_maxCount * 4 - access_pic.length; i++) {
			const liStart = document.createElement("li");
			liStart.setAttribute("class", "access_over_item");
			access.append(liStart);
		}
	}
}
function dotAccessItem() {
	for (let i = 0; i < over_dots_item.length; i++) {
		const element = over_dots_item[i];
		element.onclick = function () {
			access_count = i + 1
			access_moveNum = -100 * access_count;
			accessTimeHandler()
			dotsAccessHandler()
			resetAccessTime();
		}
	}
}
setTimeout(() => {
	pushEpmt();
	pushAccessEnd();
	pushAccessStart();
	access_moveHandler();
	pushAccissDots();
}, 100);

accessTimeHandler();
