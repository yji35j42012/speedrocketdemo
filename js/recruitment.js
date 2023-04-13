var recruitment_term = document.querySelectorAll("#recruitment_term > li");
var defaultGo = 98 + window.innerWidth * 0.3 - 66 - 103;
var nowScroll = 0;
var oldScroll = 0;
var scrollState = "down";
var termCount = null;
var termArr = [];
var term_refer = document.querySelectorAll("[name=term_refer]");
var hasClass = 0;
window.addEventListener("scroll", scrollListener);

function clearTerm() {
	for (let i = 0; i < recruitment_term.length; i++) {
		recruitment_term[i].classList.remove("on");
	}
}
function scrollListener() {
	var nowScroll = window.scrollY;
	nowScroll >= oldScroll ? (scrollState = "down") : (scrollState = "up");
	oldScroll = nowScroll;
	if (termCount == null && nowScroll > termArr[0] && scrollState == "down") {
		termCount = 0;
		recruitment_term[termCount].classList.add("on");
	} else if (nowScroll > termArr[termCount + 1] && scrollState == "down") {
		recruitment_term[termCount].classList.remove("on");
		termCount++;
		recruitment_term[termCount].classList.add("on");
		console.log('asdf');

	}
	if (scrollState == "up") {
		console.log("asdf");

		for (let i = 0; i < term_refer.length; i++) {
			const element = term_refer[i];
			if (element.classList.contains("aos-animate")) {
				console.log("hasClass", hasClass);
				hasClass = i;
			}
		}
		remove();
	}
}
for (let i = 0; i < recruitment_term.length; i++) {
	const element = recruitment_term[i];
	element.onclick = function() {
		var item = document.querySelector("#" + element.getAttribute("name"));
		var nowScroll = window.scrollY;
		var goScroll = item.offsetTop + defaultGo;
		goScroll > nowScroll
			? goDown(nowScroll, goScroll)
			: goTop(nowScroll, goScroll);
		term_refer[i + 1].classList.remove("aos-animate");
	};
}
function goTop(from, to) {
	let scrollTime = setInterval(() => {
		if (from <= to) {
			from = to;
			clearInterval(scrollTime);
		} else {
			window.scrollTo(0, from);
			from = from - 50;
		}
	}, 0);
}
function goDown(from, to) {
	let scrollTime = setInterval(() => {
		if (from >= to) {
			from = to;
			clearInterval(scrollTime);
		} else {
			window.scrollTo(0, from);
			from = from + 50;
		}
	}, 0);
}
window.onresize = function() {
	defaultGo = 98 + window.innerWidth * 0.3 - 66 - 103;
};

// var mailHandler = document.querySelector("#mailHandler");
const select = DOM => document.querySelector(DOM);

select("#mailHandler").addEventListener("click", e => {
	// 建立 Range 物件
	const range = document.createRange();
	const texts = select("#mailHandler");
	range.selectNode(texts);
	// 取得 Selection 物件
	const selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);
	document.execCommand("copy");
	selection.removeAllRanges();
	mailHandler.classList.add("on");
	setTimeout(() => {
		mailHandler.classList.remove("on");
	}, 2500);
});

function getItemTop() {
	var nowScroll = window.scrollY;
	termArr = [];
	for (let i = 0; i < recruitment_term.length; i++) {
		const element = recruitment_term[i];
		var item = document.querySelector("#" + element.getAttribute("name"));
		termArr.push(item.offsetTop);
		if (nowScroll > item.offsetTop) {
			termCount = i;
		}
	}
	if (termCount == null) return;
	recruitment_term[termCount].classList.add("on");
}

function remove() {
	console.log("hasClass", hasClass);
	// hasClass <= 1 ? (termCount = 0) : termCount;
	if (hasClass < termCount) {
		recruitment_term[termCount].classList.remove("on");
		recruitment_term[hasClass].classList.add("on");
		termCount--;
		hasClass--;
	}
}
setTimeout(() => {
	getItemTop();
	scrollListener();
}, 300);
