window.addEventListener("scroll", scrollListener);
var business = document.querySelector("#business");
var anishow = document.querySelectorAll("[name=anishow]");
var showCount = 0;
var range = 0;
console.log("anishow", anishow);

for (let i = 0; i < anishow.length; i++) {
	const element = anishow[i];
	console.log("anishow" + i + ":" + element.offsetTop);
}

function scrollListener() {
	var windowHeight = window.pageYOffset;
	console.log("windowHeight", windowHeight);
	console.log("business", business.offsetTop);
	let count = parseInt(showCount) + parseInt(1);
	if (
		windowHeight + 300 >
		anishow[showCount].offsetTop + business.offsetTop
	) {
		business.classList.add("businessTitle" + count);
	} else if (
		windowHeight <
		anishow[showCount].offsetTop + business.offsetTop - 487
	) {
		business.classList.remove("businessTitle" + count);
	}
}

//
// var businessTitle1 = document.querySelector("#business_title1");
// var business_detail_txt2 = document.querySelector(".business_detail_txt2");
// var business_title2 = document.querySelector("#business_title2");
// var business_detail_txt3 = document.querySelector("#business_detail_txt3");

// function scrollListener() {
// 	var windowHeight = window.pageYOffset;
// 	var firstRange = businessTitle1.offsetTop + business.offsetTop;
// 	var secondRange = business_detail_txt2.offsetTop + firstRange;
// 	var thirdRange = business_title2.offsetTop + firstRange;
// 	var forRange = business_detail_txt3.offsetTop + firstRange;

// 	console.log("windowHeight", windowHeight);
// 	console.log("firstRange", firstRange);
// 	if (windowHeight + 300 > firstRange) {
// 		business.classList.add("businessTitle1");
// 	} else if (windowHeight < firstRange - 487) {
// 		business.classList.remove("businessTitle1");
// 	}

// 	if (windowHeight + 300 > secondRange) {
// 		business.classList.add("businessTitle2");
// 	} else if (windowHeight < secondRange - 487) {
// 		business.classList.remove("businessTitle2");
// 	}

// 	if (windowHeight + 300 > thirdRange) {
// 		business.classList.add("businessTitle3");
// 	} else if (windowHeight < thirdRange - 487) {
// 		business.classList.remove("businessTitle3");
// 	}

// 	if (windowHeight + 300 > forRange) {
// 		business.classList.add("businessTitle4");
// 	} else if (windowHeight < forRange - 487) {
// 		business.classList.remove("businessTitle4");
// 	}
// }
