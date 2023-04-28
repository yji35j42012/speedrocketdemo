var searchInpBox = document.querySelector("#searchInpBox");
var searchInp = document.querySelector("#searchInp");
var searchHandler = document.querySelector("#searchHandler");
var office_area = document.querySelector("#office_area");
var nodata = document.querySelector("#nodata");

searchInp.addEventListener("focus", function() {
	searchInpBox.classList.add("_in");
});
searchInp.addEventListener("blur", function() {
	setTimeout(() => {
		searchInpBox.classList.remove("_in");
	}, 100);
});
searchHandler.onclick = function(event) {
	if (!searchInpBox.classList.contains("_in")) {
		return;
	} else {
		searchInpBox.classList.remove("_in");

		filiter();

		setTimeout(() => {
			searchInp.blur();
		}, 100);
	}
};

var selectHandler = document.querySelectorAll("[name=selectHandler]");
var page_input = document.querySelectorAll("[name=page_input]");
var selectHandlerItem = null;
for (let i = 0; i < selectHandler.length; i++) {
	const element = selectHandler[i];
	element.onclick = function() {
		if (selectHandlerItem == i) {
			selectHandler[selectHandlerItem].classList.remove("on");
			selectHandlerItem = null;
		} else if (selectHandlerItem == null) {
			selectHandler[i].classList.add("on");
			selectHandlerItem = i;
		} else {
			selectHandler[selectHandlerItem].classList.remove("on");
			selectHandler[i].classList.add("on");
			selectHandlerItem = i;
		}
	};
}

var select_area_txt = document.querySelectorAll("[name=select_area_txt]");
var select_area = document.querySelectorAll("#select_area > li");
var select_brand_txt = document.querySelectorAll("[name=select_brand_txt]");
var select_brand = document.querySelectorAll("#select_brand > li");

var area_group = document.querySelector("#area_group");

// areaNum 1:香港、2:馬來西亞、3:新加坡
// brandNum 0:all、1:SHARECO、2:KP記憶香氛
var areaData = [
	{
		type: "txt",
		name: "張梁記 荃新天地店",
		phone: "+852 6651 2866",
		address: "荃灣楊屋道1號荃新天地1期 (UG樓UG52B舖)",
		areaNum: 1,
		brandNum: 0
	},
	{
		type: "txt",
		name: "張梁記 尖沙咀美麗華店",
		phone: "+852 5485 5110",
		address: "香港尖沙咀彌敦道132號 (美麗華廣場1期G06)",
		areaNum: 1,
		brandNum: 0
	},
	{
		type: "txt",
		name: "張梁記 旺角618上海街店",
		phone: "+852 6677 4005",
		address: "香港旺角上海街618號 (1樓102A舖)",
		areaNum: 1,
		brandNum: 0
	},
	{
		type: "txt",
		name: "張梁記 銅鑼灣希慎店",
		phone: "+852 5291 8462",
		address: "香港銅鑼灣軒尼詩道500號(希慎廣場 5 樓 501 舖)",
		areaNum: 1,
		brandNum: 0
	},
	{
		type: "txt",
		name: "a1shopee",
		phone: "+852 5689 5208",
		address: "香港旺角先達廣場1樓F72店",
		areaNum: 1,
		brandNum: 0
	},
	{
		type: "txt",
		name: "158CM CONCEPT STORE",
		phone: "+6012-2511125",
		address:
			"Eco Palladium, Block B #01-20 Jalan Ekoflora 7/2, Jalan Ekoflora Utama, 81100 , Johor.",
		areaNum: 2,
		brandNum: 1
	},
	{
		type: "txt",
		name: "Pavilion Bukit Jalil - HaWooo Store",
		phone: "-",
		address: "No 2 Persiaran Jalil Utama, Bandar Bukit Jalil, Kuala Lumpur",
		areaNum: 2,
		brandNum: 0
	},
	{
		type: "txt",
		name: "HMXY",
		phone: "+6012-2511125",
		address:
			"12-01, Jalan Austin Heights 8/9, Taman Mount Austin, Johor Bahru, Malaysia",
		areaNum: 2,
		brandNum: 0
	},
	{
		type: "txt",
		name: "HYPESTAGES JOHOR",
		phone: "+6012-2511125",
		address:
			"B-0107 Eco Galleria 3, Jalan Eko Botani 3/2, Taman Eko Botani,79100 Iskandar Puteri,Johor.",
		areaNum: 2,
		brandNum: 0
	},
	{
		type: "txt",
		name: "HYPESTAGES",
		phone: "+6012-2511125",
		address:
			"No71,Jalan PJS 11/7, Bandar Sunway, 47500 Petaling Jaya, Selangor",
		areaNum: 2,
		brandNum: 0
	},
	{
		type: "pic",
		name: "PNJ Malaysia",
		picSrc: "../images/office_overseas/pnj_logo.png",
		needClass: "office_area_logo _pnj",
		areaNum: 2,
		brandNum: 0
	},
	{
		type: "pic",
		name: "Maxel Beauty Malaysia",
		picSrc: "../images/office_overseas/maxelbeauty_logo.png",
		needClass: "office_area_logo _maxelbeauty",
		areaNum: 2,
		brandNum: 1
	},
	{
		type: "txt",
		name: "MENDATORY BY SGPOMADES",
		phone: "+65 9477 8385",
		address: "10 Tampines Central 1, #01-41, Singapore 529536",
		areaNum: 3,
		brandNum: 1
	}
];

var setAreaData = areaData;
var selectArea = 0;
var selectBrand = 0;
var selectCount = 0;
function filiter() {
	setAreaData = [];
	let objArr = [];
	let areaNum = parseInt(selectArea);
	let brandNum = parseInt(selectBrand);
	if (selectArea == 0 && selectBrand == 0) {
		setAreaData = areaData;
	}
	if (areaNum !== 0) {
		for (let i = 0; i < areaData.length; i++) {
			if (areaData[i].areaNum == areaNum) {
				objArr.push(areaData[i]);
			}
		}
		setAreaData = objArr;
	} else {
		setAreaData = areaData;
	}
	if (brandNum !== 0) {
		objArr = [];
		for (let i = 0; i < setAreaData.length; i++) {
			if (
				setAreaData[i].brandNum == 0 ||
				setAreaData[i].brandNum == brandNum
			) {
				objArr.push(setAreaData[i]);
			}
		}
		setAreaData = objArr;
	}

	if (searchInp.value !== "") {
		objArr = [];
		for (let i = 0; i < setAreaData.length; i++) {
			var searchName = searchInp.value.toLowerCase();
			var arrName = setAreaData[i].name
				? setAreaData[i].name.toLowerCase()
				: "";
			var arrPhone = setAreaData[i].phone ? setAreaData[i].phone : "";
			var arrAddress = setAreaData[i].address
				? setAreaData[i].address.toLowerCase()
				: "";

			if (
				arrName.indexOf(searchName) !== -1 ||
				arrPhone.indexOf(searchName) !== -1 ||
				arrAddress.indexOf(searchName) !== -1
			) {
				objArr.push(setAreaData[i]);
			}
		}
		setAreaData = objArr;
	}
	setData();
}

function setData() {
	area_group.innerHTML = "";
	if (setAreaData.length == 0) {
		nodata.style.display = "";
		office_area.style.display = "none";
	} else {
		nodata.style.display = "none";
		office_area.style.display = "";
	}
	for (let i = 0; i < setAreaData.length; i++) {
		const li = document.createElement("li");
		li.setAttribute("class", "office_area_item");
		if (setAreaData[i].type == "txt") {
			const child1 = document.createElement("div");
			child1.setAttribute("class", "office_area_name");
			child1.innerHTML = setAreaData[i].name;
			const child2 = document.createElement("div");
			child2.setAttribute("class", "office_area_phone");
			child2.innerHTML = setAreaData[i].phone;
			const child3 = document.createElement("div");
			child3.setAttribute("class", "office_area_address");
			child3.innerHTML = setAreaData[i].address;
			li.append(child1);
			li.append(child2);
			li.append(child3);
		} else if (setAreaData[i].type == "pic") {
			const child1 = document.createElement("div");
			child1.setAttribute("class", setAreaData[i].needClass);
			const child1Pic = document.createElement("img");
			child1Pic.setAttribute("src", setAreaData[i].picSrc);
			child1.append(child1Pic);
			const child2 = document.createElement("div");
			child2.setAttribute("class", "office_area_name");
			child2.innerHTML = setAreaData[i].name;
			li.append(child1);
			li.append(child2);
		}
		area_group.append(li);
	}
}
function setTxt(who, txt) {
	for (let i = 0; i < select_area_txt.length; i++) {
		if (who == "area") {
			select_area_txt[i].innerHTML = txt;
		} else if (who == "brand") {
			select_brand_txt[i].innerHTML = txt;
		}
	}
}
for (let i = 0; i < select_area.length; i++) {
	const element = select_area[i];
	element.onclick = function() {
		setTxt("area", element.innerHTML);
		selectArea = element.getAttribute("data-area");
		filiter();
	};
}

for (let i = 0; i < select_brand.length; i++) {
	const element = select_brand[i];
	element.onclick = function() {
		setTxt("brand", element.innerHTML);
		selectBrand = element.getAttribute("data-brand");
		filiter();
	};
}
filiter();
setData();
