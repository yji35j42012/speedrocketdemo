//

//
// // var access_time = 6; //6秒
// let accessTime = null;

//
// var hoverItemClose = document.querySelectorAll(
// 	"#access_over_group .hoverItem_close"
// );
// var hoverItem = document.querySelectorAll("#access_over_group .hoverItem");
// // function accessTimeHandler() {
// // 	accessTime = setInterval(() => {
// // 		if (access_count + 1 >= access_maxCount) {
// // 			console.log("oiver");
// // 			access_count = 0;
// // 		} else {
// // 			access_count++;
// // 		}
// // 		access_moveNum = -100 * access_count;
// // 		for (let i = 0; i < hoverItem.length; i++) {
// // 			const element = hoverItem[i];
// // 			element.classList.remove("on");
// // 		}
// // 		access_moveHandler();
// // 		dotsAccessHandler();
// // 		resetAccessTime();
// // 	}, access_time * 1000);
// // }
// // function resetAccessTime() {
// // 	clearInterval(accessTime);
// // 	// accessTimeHandler();
// // 	if (access_count == access_maxCount + 1) {
// // 		goAccessFirst();
// // 	} else if (access_count == 0) {
// // 		goAccessEnd();
// // 	}
// // }

// for (let i = 0; i < hoverItemClose.length; i++) {
// 	const element = hoverItemClose[i];
// 	element.onclick = function(e) {
// 		e.stopPropagation();
// 		hoverItem[i].classList.remove("on");
// 	};
// }

// // window.onresize = function () {
// // 	if( window.innerWidth <= 1024){
// // 		access.style.height ='';
// // 	}else{
// // 		access.style.height = access.offsetHeight + 'px';
// // 	}
// // };
// // // 快速換回第一張
// // function goAccessFirst() {
// // 	setTimeout(() => {
// // 		access_count = 1;
// // 		access_moveNum = -100 * access_count;
// // 		access.style = `transform: translateX(${access_moveNum}%);transition-duration: 0s;opacity:1;`;
// // 	}, 350);
// // }
// // // 快速換回最後一張
// // function goAccessEnd() {
// // 	setTimeout(() => {
// // 		access_count = access_maxCount;
// // 		access_moveNum = -100 * access_count;
// // 		access.style = `transform: translateX(${access_moveNum}%);transition-duration: 0s;opacity:1;`;
// // 	}, 350);
// // }
// function pushAccessStart() {
// 	let getImgS = (access_maxCount - 1) * 4;
// 	let getImgE = access_pic.length;
// 	let repair = access_maxCount * 4 - getImgE; //補
// 	for (let i = getImgS + 1; i < getImgE + 1; i++) {
// 		var getImg = document.querySelector(
// 			`#access_over_group > .access_over_item:nth-child(${i}) img`
// 		);
// 		var getImg2 = document.querySelector(
// 			`#access_over_group > .access_over_item:nth-child(${i}) img:nth-child(2)`
// 		);
// 		const liStart = document.createElement("li");
// 		liStart.setAttribute("class", "access_over_item");
// 		const child1 = document.createElement("img");
// 		child1.setAttribute("src", getImg.getAttribute("src"));
// 		child1.setAttribute("alt", getImg.getAttribute("alt"));
// 		child1.setAttribute("class", getImg.getAttribute("class"));
// 		const child2 = document.createElement("img");
// 		child2.setAttribute("src", getImg2.getAttribute("src"));
// 		child2.setAttribute("alt", getImg2.getAttribute("alt"));
// 		child2.setAttribute("class", getImg2.getAttribute("class"));
// 		liStart.append(child1);
// 		liStart.append(child2);
// 		access.insertBefore(liStart, access_pic[0]);
// 	}
// 	for (let i = 0; i < repair; i++) {
// 		const liStart = document.createElement("li");
// 		liStart.setAttribute("class", "access_over_item");
// 		access.insertBefore(liStart, access_pic[0]);
// 	}
// }
// function pushAccessEnd() {
// 	if (access_maxCount <= 1) {
// 		return;
// 	}
// 	for (let i = 1; i < 5; i++) {
// 		var getImg = document.querySelector(
// 			`#access_over_group > .access_over_item:nth-child(${i}) img`
// 		);
// 		var getImg2 = document.querySelector(
// 			`#access_over_group > .access_over_item:nth-child(${i}) img:nth-child(2)`
// 		);
// 		const liEnd = document.createElement("li");
// 		liEnd.setAttribute("class", "access_over_item");
// 		const child1 = document.createElement("img");
// 		child1.setAttribute("src", getImg.getAttribute("src"));
// 		child1.setAttribute("alt", getImg.getAttribute("alt"));
// 		child1.setAttribute("class", getImg.getAttribute("class"));
// 		const child2 = document.createElement("img");
// 		child2.setAttribute("src", getImg2.getAttribute("src"));
// 		child2.setAttribute("alt", getImg2.getAttribute("alt"));
// 		child2.setAttribute("class", getImg2.getAttribute("class"));
// 		liEnd.append(child1);
// 		liEnd.append(child2);
// 		access.appendChild(liEnd, access_pic[0]);
// 	}
// }

//
// 	dotsAccessHandler();
// 	dotAccessItem();
// }

// // 補上不足
// function pushEpmt() {
// 	if (access_pic.length % 4 !== 0) {
// 		for (let i = 0; i < access_maxCount * 4 - access_pic.length; i++) {
// 			const liStart = document.createElement("li");
// 			liStart.setAttribute("class", "access_over_item");
// 			access.append(liStart);
// 		}
// 	}
// }
// function dotAccessItem() {
// 	for (let i = 0; i < over_dots_item.length; i++) {
// 		const element = over_dots_item[i];
// 		element.onclick = function() {
// 			access_count = i;
// 			access_moveNum = -100 * access_count;
// 			access_moveHandler();
// 			dotsAccessHandler();
// 			resetAccessTime();
// 		};
// 	}
// }

// // accessTimeHandler();



//
// var product_dots = document.querySelector("#product_dots");





//
// 	dotsProductHandler();
// 	dotProductItem();
// }
// product_moveHandler();
//
