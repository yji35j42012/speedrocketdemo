var recruitment_term = document.querySelectorAll("#recruitment_term > li");
var body = document.html
var nav_box = document.querySelector("#nav_box");
var screenW = window.innerWidth
var defaultGo = window.innerWidth * 0.32 - nav_box.offsetHeight
var nowScroll = 0
console.log(' nav_box.offsetHeight', nav_box.offsetHeight);


for (let i = 0; i < recruitment_term.length; i++) {
    const element = recruitment_term[i];
    element.onclick = function () {
        var item = document.querySelector('#' + element.getAttribute("name"))
        var nowScroll = window.scrollY
        var goScroll = item.offsetTop + defaultGo
        goScroll > nowScroll ? goDown(nowScroll, goScroll) : goTop(nowScroll, goScroll)
    }
}
function goTop(from, to) {
    let scrollTime = setInterval(() => {
        if (from <= to) {
            from = to
            clearInterval(scrollTime)
        } else {
            window.scrollTo(0, from)
            from = from - 50
        }
    }, 0);
}
function goDown(from, to) {
    let scrollTime = setInterval(() => {
        if (from >= to) {
            from = to
            clearInterval(scrollTime)
        } else {
            window.scrollTo(0, from)
            from = from + 50
        }
    }, 0);
}
window.onresize = function () {
    screenW = window.innerWidth
};




// var mailHandler = document.querySelector("#mailHandler");
const select = (DOM) => document.querySelector(DOM);

select('#mailHandler').addEventListener('click', (e) => {
    // 建立 Range 物件
    const range = document.createRange();
    const texts = select('#mailHandler');
    range.selectNode(texts);
    // 取得 Selection 物件
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
    mailHandler.classList.add('on')
    setTimeout(() => {
        mailHandler.classList.remove('on')
    }, 2500);
})

