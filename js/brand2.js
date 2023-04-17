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
// console.log("access_maxCount", access_maxCount);

// function accessTimeHandler() {
// 	accessTime = setInterval(() => {
// 		access_count++;
// 		access_moveNum = -100 * access_count;
// 		access_moveHandler();
// 		dotsAccessHandler();
// 		resetTime();
// 	}, access_time * 1000);
// }
// function resetTime() {
// 	clearInterval(accessTime);
// 	accessTimeHandler();
// 	if (access_count == access_maxCount + 1) {
// 		goFirst();
// 	} else if (access_count == 0) {
// 		goEnd();
// 	}
// }
// // 快速換回第一張
// function goFirst() {
// 	setTimeout(() => {
// 		access_count = 1;
// 		access_moveNum = -100 * access_count;
// 		access.style = `transform: translateX(${access_moveNum}%);transition-duration: 0;opacity:1;`;
// 	}, 350);
// }
// // 快速換回最後一張
// function goEnd() {
// 	setTimeout(() => {
// 		access_count = access_maxCount;
// 		access_moveNum = -100 * access_count;
// 		access.style = `transform: translateX(${access_moveNum}%);transition-duration: 0;opacity:1;`;
// 	}, 350);
// }
function pushAccessStart() {
	let getImgS = (access_maxCount - 1) * 4;
	let getImgE = access_pic.length;

	for (let i = getImgS; i < getImgE; i++) {
		var getImg = document.querySelector(
			`#access_over_group > .access_over_item:nth-child(${i}) img`
		);
		var getImg2 = document.querySelector(
			`#access_over_group > .access_over_item:nth-child(${i}) img:nth-child(2)`
		);
		const liStart = document.createElement("li");
		liStart.setAttribute("class", "access_over_item");
		
		console.log("getImg", getImg.getAttribute("src"));
		console.log("getImg2", getImg2.getAttribute("src"));
	}

	// console.log("getImg", getImg);

	// for (let index = 0; index < array.length; index++) {
	// 	const element = array[index];

	// }
	// const liStart = document.createElement("li");
	// liStart.setAttribute("class", "access_item");
	// const child = document.createElement("img");
	// child.setAttribute("src", getImg.getAttribute("src"));
	// liStart.append(child);
	// access.insertBefore(liStart, access_pic[0]);
}
// function pushEnd() {
// 	var getImg = document.querySelector(
// 		"#access_over_group > .access_item:nth-child(2) img"
// 	);
// 	const liEnd = document.createElement("li");
// 	liEnd.setAttribute("class", "access_item");
// 	const child = document.createElement("img");
// 	child.setAttribute("src", getImg.getAttribute("src"));
// 	liEnd.append(child);
// 	access.appendChild(liEnd, access_pic[0]);
// }
// function dotItem() {
// 	for (let i = 0; i < over_dots_item.length; i++) {
// 		const element = over_dots_item[i];
// 		element.onclick = function() {
// 			access_count = i + 1;
// 			access_moveNum = -100 * access_count;
// 			access_moveHandler();
// 			dotsAccessHandler();
// 			resetTime();
// 		};
// 	}
// }

over_next.onclick = function() {
	console.log("over_next");
	access_count++;
	access_moveNum = -100 * access_count;
	access_moveHandler();
	// resetTime();
	// dotsAccessHandler();
};
over_prev.onclick = function() {
	console.log("over_prev");
	access_count--;
	access_moveNum = -100 * access_count;
	access_moveHandler();
	// resetTime();
	// dotsAccessHandler();
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
	// dotItem();
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

setTimeout(() => {
	pushEpmt();
	pushAccessStart();
	// 	pushEnd();
	// 	access_moveHandler();
	pushAccissDots();
}, 100);

// accessTimeHandler();
