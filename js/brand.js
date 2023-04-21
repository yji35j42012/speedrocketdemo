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
var photo_kp = document.querySelector("#photo_kp");
var introduction1 = document.querySelector("#introduction1");
var introduction1_pic = document.querySelector(
	"#introduction1 > .brandSH_introduction_pic"
);
var introduction1_txt = document.querySelector(
	"#introduction1 > .brandSH_introduction_txt"
);

function bannerTimeHandler() {
	bannerTime = setInterval(() => {
		banner_count++;
		banner_moveNum = -100 * banner_count;
		banner_moveHandler();
		dotsHandler();
		resetTime();
	}, banner_time * 1000);
}
banner_next.onclick = function() {
	banner_count++;
	banner_moveNum = -100 * banner_count;
	banner_moveHandler();
	resetTime();
	dotsHandler();
};
banner_prev.onclick = function() {
	banner_count--;
	banner_moveNum = -100 * banner_count;
	banner_moveHandler();
	resetTime();
	dotsHandler();
};
function resetTime() {
	clearInterval(bannerTime);
	bannerTimeHandler();
	if (banner_count == banner_maxCount + 1) {
		goFirst();
	} else if (banner_count == 0) {
		goEnd();
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
	liStart.setAttribute(
		"style",
		"background-image: url('" + getImg.getAttribute("src") + "')"
	);
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
	liEnd.setAttribute(
		"style",
		"background-image: url('" + getImg.getAttribute("src") + "')"
	);
	const child = document.createElement("img");
	child.setAttribute("src", getImg.getAttribute("src"));
	liEnd.append(child);
	banner.appendChild(liEnd, banner_pic[0]);
}
function pushDots() {
	for (let i = 0; i < banner_maxCount; i++) {
		const liDot = document.createElement("li");
		liDot.setAttribute("class", "normal_dots_item");
		banner_dots.append(liDot);
	}
	banner_dots_item = document.querySelectorAll("#banner_dots >li");
	dotsHandler();
	dotItem();
}
function dotsHandler() {
	allDotsRemove();
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
		element.onclick = function() {
			banner_count = i + 1;
			banner_moveNum = -100 * banner_count;
			banner_moveHandler();
			dotsHandler();
			resetTime();
		};
	}
}
function allDotsRemove() {
	for (let i = 0; i < banner_dots_item.length; i++) {
		const element = banner_dots_item[i];
		element.classList.remove("on");
	}
}
setTimeout(() => {
	pushStart();
	pushEnd();
	banner_moveHandler();
	pushDots();
}, 100);

bannerTimeHandler();

var device = window.innerWidth <= 1024 ? "ph" : "pc";
var access = document.querySelector("#access_over_group");
var access_pic = document.querySelectorAll(
	"#access_over_group > .access_over_item"
);
var over_prev = document.querySelector("#over_prev");
var over_next = document.querySelector("#over_next");
var access_count = 0;
var access_moveNum = -100 * access_count;
var access_maxCount =
	device == "pc" ? Math.ceil(access_pic.length / 4) : access_pic.length;
var over_dots = document.querySelector("#over_dots");
var over_dots_item = null;
var lightBox = document.querySelector("#lightBox");
var lightBox_close = document.querySelector("#lightBox_close");

over_next.onclick = function() {
	console.log("access_count", access_count);
	if (access_count + 1 >= access_maxCount) {
		access_count = 0;
	} else {
		access_count++;
	}
	access_moveNum = -100 * access_count;
	access_moveHandler();
	dotsAccessHandler();
};
over_prev.onclick = function() {
	console.log("access_count", access_count);
	if (access_count == 0) {
		access_count = access_maxCount - 1;
	} else {
		access_count--;
	}
	access_moveNum = -100 * access_count;
	access_moveHandler();
	dotsAccessHandler();
};

function access_moveHandler() {
	for (let i = 0; i < access_pic.length; i++) {
		const element = access_pic[i];

		element.onclick = function() {
			if (device == "pc") return;
			lightBox.classList.add("on");
			setTimeout(() => {
				lightBox.classList.add("op1");
			}, 50);
			let num = i + 1;
			var getImg1 = document.querySelector(
				".access_over_item:nth-child(" + num + ") > .access_over_flag"
			);
			var getImg2 = document.querySelector(
				".access_over_item:nth-child(" + num + ") > .access_over_logo"
			);
			var getTxt1 = document.querySelector(
				".access_over_item:nth-child(" + num + ") .hoverItem_country"
			);
			var getTxt2 = document.querySelector(
				".access_over_item:nth-child(" + num + ") .hoverItem_countryTw"
			);
			var getTxt3 = document.querySelector(
				".access_over_item:nth-child(" + num + ") .hoverItem_shop"
			);

			var lightBox_flag = document.querySelector("#lightBox_flag");
			var lightBox_logo = document.querySelector("#lightBox_logo");
			var lightBox_country = document.querySelector("#lightBox_country");
			var lightBox_countryTw = document.querySelector(
				"#lightBox_countryTw"
			);
			var lightBox_shop = document.querySelector("#lightBox_shop");
			lightBox_flag.setAttribute("src", getImg1.getAttribute("src"));
			lightBox_logo.setAttribute("src", getImg2.getAttribute("src"));
			lightBox_country.innerHTML = getTxt1.innerHTML;
			lightBox_countryTw.innerHTML = getTxt2.innerHTML;
			lightBox_shop.innerHTML = getTxt3.innerHTML;
		};
	}
	// let start = access_count * 4;
	// let end =
	// 	(access_count + 1) * 4 > access_pic.length
	// 		? access_pic.length
	// 		: (access_count + 1) * 4;
	// for (let i = start; i < end; i++) {
	// 	access_pic[i].style.display = "flex";
	// }
	// access.style.height = access.offsetHeight + 'px';
	access.style = `transform: translateX(${access_moveNum}%);transition-duration: 0.3s;opacity:1;`;
}
lightBox_close.onclick = function() {
	lightBox.classList.remove("op1");
	setTimeout(() => {
		lightBox.classList.remove("on");
	}, 50);
};

function dotsAccessHandler() {
	allDotsRemoveAccess();
	over_dots_item[access_count].classList.add("on");
	// if (access_count == 1) {
	// 	over_dots_item[access_count].classList.add("on");
	// } else if (access_count == 0) {
	// 	over_dots_item[access_maxCount - 1].classList.add("on");
	// } else if (access_count > access_maxCount) {
	// 	over_dots_item[0].classList.add("on");
	// } else {
	// 	over_dots_item[access_count].classList.add("on");
	// }
}
function allDotsRemoveAccess() {
	for (let i = 0; i < over_dots_item.length; i++) {
		const element = over_dots_item[i];
		element.classList.remove("on");
	}
}
function pushAccissDots() {
	over_dots.innerHTML = "";
	for (let i = 0; i < access_maxCount; i++) {
		const liDot = document.createElement("li");
		liDot.setAttribute("class", "normal_dots_item");
		over_dots.append(liDot);
	}
	over_dots_item = document.querySelectorAll("#over_dots >li");
	dotAccessItem();
	over_dots_item[access_count].classList.add("on");
}
function dotAccessItem() {
	for (let i = 0; i < over_dots_item.length; i++) {
		const element = over_dots_item[i];
		element.onclick = function() {
			access_count = i;
			access_moveNum = -100 * access_count;
			access_moveHandler();
			dotsAccessHandler();
		};
	}
}
function introductionChangeAni() {
	if (window.innerWidth <= 1024) {
		introduction1.setAttribute("data-aos", "fade-up");
		introduction1_pic.setAttribute("data-aos", "");
		introduction1_txt.setAttribute("data-aos", "");
	} else if (window.innerWidth > 1024) {
		introduction1.setAttribute("data-aos", "");
		introduction1_pic.setAttribute("data-aos", "fade-right");
		introduction1_txt.setAttribute("data-aos", "fade-left");
	}
}
window.onresize = function() {
	if (window.innerWidth > 1024 && window.innerWidth <= 1929 && photo_kp) {
		let move = ((1929 - window.innerWidth) / 2) * -1;
		photo_kp.style = `transform: translateX(${move}px);`;
	} else if (window.innerWidth <= 1024 && photo_kp) {
		let move = ((1024 - window.innerWidth) / 2) * -1;
		photo_kp.style = `transform: translateX(${move}px);`;
	} else if (photo_kp && window.innerWidth > 1929) {
		photo_kp.style = "";
	}
	if (window.innerWidth <= 1024) {
		productIconAdd();
	}
	if (window.innerWidth <= 1024 && device == "pc") {
		device = "ph";
		introductionChangeAni();
		access_maxCount = access_pic.length;
		access_moveHandler();
		pushAccissDots();
	} else if (device == "ph" && window.innerWidth > 1024) {
		device = "pc";
		introductionChangeAni();
		access_maxCount = Math.ceil(access_pic.length / 4);
		access_count > access_maxCount
			? (access_count = access_maxCount - 1)
			: access_count;
		access_moveNum = -100 * access_count;
		access_moveHandler();
		pushAccissDots();

		product_group.style = "";
		product_count = 0;
		dotsProductHandler();
	}
};
setTimeout(() => {
	// 	pushEpmt();
	// 	pushAccessEnd();
	// 	pushAccessStart();
	access_moveHandler();
	pushAccissDots();
}, 100);
var product_group = document.querySelector("#access_product_group");
var product_prev = document.querySelector("#product_prev");
var product_next = document.querySelector("#product_next");
var product_dots_item = null;
var product_count = 0;
var product_moveNum = -100 * product_count;
var product_item = document.querySelectorAll(
	"#access_product_group > .access_product_item"
);

var product_maxCount = product_item.length;
function productIconAdd() {
	var product_picH = document.querySelector("#product_pic").clientHeight / 2;
	let numT = parseInt(product_picH) + 42 + 32;
	product_prev.style.top = numT + "px";
	product_next.style.top = numT + "px";
}
product_prev.onclick = function() {
	if (product_count == 0) {
		product_count = product_maxCount - 1;
	} else {
		product_count--;
	}
	product_moveNum = -100 * product_count;
	product_moveHandler();
	dotsProductHandler();
};
product_next.onclick = function() {
	if (product_count + 1 >= product_maxCount) {
		product_count = 0;
	} else {
		product_count++;
	}
	product_moveNum = -100 * product_count;
	product_moveHandler();
	dotsProductHandler();
};
function product_moveHandler() {
	for (let i = 0; i < product_item.length; i++) {
		if (window.innerWidth <= 1024) {
			const element = product_item[i];
		}
	}
	product_group.style = `transform: translateX(${product_moveNum}%);transition-duration: 0.3s;opacity:1;`;
}
function dotProductItem() {
	for (let i = 0; i < product_dots_item.length; i++) {
		const element = product_dots_item[i];
		element.onclick = function() {
			product_count = i;
			product_moveNum = -100 * product_count;
			product_moveHandler();
			dotsProductHandler();
		};
	}
}
function allDotsRemoveProduct() {
	for (let i = 0; i < product_dots_item.length; i++) {
		const element = product_dots_item[i];
		element.classList.remove("on");
	}
}
function dotsProductHandler() {
	allDotsRemoveProduct();
	product_dots_item[product_count].classList.add("on");
	dotProductItem();
}
function pushProductDots() {
	for (let i = 0; i < product_maxCount; i++) {
		const liDot = document.createElement("li");
		liDot.setAttribute("class", "normal_dots_item");
		product_dots.append(liDot);
		product_dots_item = document.querySelectorAll("#product_dots >li");
		dotsProductHandler();
	}
}
setTimeout(() => {
	pushProductDots();
	productIconAdd();
	introductionChangeAni();
}, 200);
