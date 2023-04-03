window.addEventListener("scroll", scrollListener);
var business = document.querySelector("#business");
var businessTitle1 = document.querySelector("#business_title1");
var business_detail_txt2 = document.querySelector(".business_detail_txt2");
function scrollListener() {
	var windowHeight = window.pageYOffset;
	var firstRange = businessTitle1.offsetTop + business.offsetTop;
	var secondRange = business_detail_txt2.offsetTop + firstRange;
	console.log("windowHeight", windowHeight);
	console.log("firstRange", firstRange);
	if (windowHeight + 300 > firstRange) {
		business.classList.add("businessTitle1");
	} else if (windowHeight < firstRange - 487) {
		business.classList.remove("businessTitle1");
	}

	if (windowHeight + 300 > secondRange) {
		business.classList.add("businessTitle2");
	} else if (windowHeight < secondRange - 487) {
		business.classList.remove("businessTitle2");
	}
	// console.log('business_detail_txt2',business_detail_txt2.offsetTop);

	// if (windowHeight + 300 > businessTitle1.offsetTop + business.offsetTop) {
	//
	// 	console.log("出現");
	// } else if (
	//
	//
	// ) {
	//
	// 	console.log("消失");
	// }
}
