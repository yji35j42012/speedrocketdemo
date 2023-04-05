window.addEventListener("scroll", scrollListener);
var business = document.querySelector("#business");
var anishow = document.querySelectorAll("[name=anishow]");
var anishowTxt = document.querySelectorAll(".txt");
var businessTxt = document.querySelectorAll(".businessTxt");

var businessTxtArr = [0]
var aniArr = [];
var defaultH = 132;
var defaultScore = window.innerHeight * (1 / 3);//超出視窗高度的3分之1
var showCount = 0
var aboutMarginTop = document.querySelector("#about").offsetTop;
var business_titleH = document.querySelector("#business_title").clientHeight;


setTimeout(() => {
	for (let i = 0; i < anishow.length; i++) {
		aniArr.push(anishow[i].offsetTop + business.offsetTop)
	}
}, 10);

function scrollListener() {
	var windowHeight = window.pageYOffset;
	if (windowHeight + defaultScore > aniArr[showCount]) {
		showCount++
		businessTxtArr[showCount] ? business.style = `--lineHeight:${businessTxtArr[showCount]}px` : ''
		business.classList.add('show' + showCount)
	} else if (showCount > 0 && aniArr[showCount - 1] - aboutMarginTop - business_titleH > windowHeight) {
		business.classList.remove('show' + showCount)
		showCount <= 0 ? showCount = 0 : showCount--;
		businessTxtArr[showCount] ? business.style = `--lineHeight:${businessTxtArr[showCount]}px` : business.style = `--lineHeight:0px`
	}
}


setTimeout(() => {
	for (let i = 0; i < businessTxt.length; i++) {
		if (i == businessTxt.length - 1) {
			businessTxtArr.push(business.offsetHeight - 53)
		} else {
			businessTxtArr.push(businessTxt[i].offsetTop)
		}

	}
}, 10);

business.style = `--lineHeight:0px`
window.onresize = function () {
	for (let i = 1; i < businessTxtArr.length; i++) {
		console.log('businessTxt' + i + ':' + businessTxt[i - 1].offsetTop + '===' + businessTxtArr[i]);
		if (businessTxt[i - 1].offsetTop !== businessTxtArr[i]) {
			i == businessTxtArr.length-1 ?businessTxtArr[i]:businessTxtArr[i] = businessTxt[i - 1].offsetTop
			
			business.style = `--lineHeight:${businessTxtArr[i]}px`
		}
	}
};
setTimeout(() => {
	scrollListener()
}, 10);
