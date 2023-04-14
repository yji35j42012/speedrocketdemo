var banner = document.querySelector("#banner_group");
var banner_pic = document.querySelectorAll("#banner_group > .banner_item");
var banner_prev = document.querySelector("#banner_prev");
var banner_next = document.querySelector("#banner_next");
var banner_count = 1;
var banner_moveNum = -100 * banner_count;
var banner_maxCount = banner_pic.length;
var banner_time = 1; //6秒
let bannerTime = null;
console.log(banner_maxCount);

function bannerTimeHandler() {
	return;
	bannerTime = setInterval(() => {
		console.log("time" + banner_count);
		banner_count++;
		banner_moveNum = -100 * banner_count;
		banner_moveHandler();
		resetTime();
	}, banner_time * 1000);
}

banner_next.onclick = function() {
	console.log("banner_next");
	banner_count++;
	banner_moveNum = -100 * banner_count;
	banner_moveHandler();
	resetTime();
};
banner_prev.onclick = function() {
	console.log("banner_next");
	banner_count--;
	banner_moveNum = -100 * banner_count;
	banner_moveHandler();
	resetTime();
};

function resetTime() {
	clearInterval(bannerTime);
	bannerTimeHandler();
}
function banner_moveHandler() {
	banner.style = `transform: translateX(${banner_moveNum}%)`;
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
		"#banner_group > .banner_item:nth-child(1) img"
	);
	const liEnd = document.createElement("li");
	liEnd.setAttribute("class", "banner_item");
	const child = document.createElement("img");
	child.setAttribute("src", getImg.getAttribute("src"));
	liEnd.append(child);
	banner.appendChild(liEnd, banner_pic[0]);
}
setTimeout(() => {
	pushStart();
	pushEnd();
}, 100);
banner_moveHandler();
bannerTimeHandler();
