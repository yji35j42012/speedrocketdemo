window.addEventListener("scroll", scrollListener);
var business = document.querySelector("#business");
var anishow = document.querySelectorAll("[name=anishow]");
var showCount = 0;
var range = 0;
var itemArr = [];
// 清資料後第一次載入business.offsetTop會出錯，所以設定setTimeout紀錄要anishow的資料
setTimeout(() => {
	for (let i = 0; i < anishow.length; i++) {
		if (i == 0) {
			itemArr.push(anishow[i].offsetTop + business.offsetTop);
		} else {
			itemArr.push(
				anishow[i].offsetTop +
					anishow[i - 1].offsetTop +
					business.offsetTop
			);
		}
	}
}, 0);

console.log("itemArr", itemArr);
function scrollListener() {
	var windowHeight = window.pageYOffset;
	console.log("windowHeight", windowHeight);
	console.log("business", business.offsetTop);
	let count = parseInt(showCount) + parseInt(1);
	if (windowHeight + 300 > itemArr[showCount]) {
		business.classList.add("show" + count);
		showCount++;
		console.log("aaa");
		// showCount++;
	} else if (windowHeight < itemArr[showCount] - 487) {
		business.classList.remove("show" + count);
		console.log("bbb");
		// showCount--;
	} else {
		console.log("ccc");
	}
}

//
// var show1 = document.querySelector("#business_title1");
// var business_detail_txt2 = document.querySelector(".business_detail_txt2");
// var business_title2 = document.querySelector("#business_title2");
// var business_detail_txt3 = document.querySelector("#business_detail_txt3");

// function scrollListener() {
// 	var windowHeight = window.pageYOffset;
// 	var firstRange = show1.offsetTop + business.offsetTop;
// 	var secondRange = business_detail_txt2.offsetTop + firstRange;
// 	var thirdRange = business_title2.offsetTop + firstRange;
// 	var forRange = business_detail_txt3.offsetTop + firstRange;

// 	console.log("windowHeight", windowHeight);
// 	console.log("firstRange", firstRange);
// 	if (windowHeight + 300 > firstRange) {
// 		business.classList.add("show1");
// 	} else if (windowHeight < firstRange - 487) {
// 		business.classList.remove("show1");
// 	}

// 	if (windowHeight + 300 > secondRange) {
// 		business.classList.add("show2");
// 	} else if (windowHeight < secondRange - 487) {
// 		business.classList.remove("show2");
// 	}

// 	if (windowHeight + 300 > thirdRange) {
// 		business.classList.add("show3");
// 	} else if (windowHeight < thirdRange - 487) {
// 		business.classList.remove("show3");
// 	}

// 	if (windowHeight + 300 > forRange) {
// 		business.classList.add("show4");
// 	} else if (windowHeight < forRange - 487) {
// 		business.classList.remove("show4");
// 	}
// }
