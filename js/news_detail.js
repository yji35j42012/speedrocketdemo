// fb分享
var fbShare = document.querySelector("#fbshare");

fbShare.onclick = function () {
	var fburl = "https://www.facebook.com/sharer/sharer.php?u=";
	var url = 'https://whatdoyouwanttoeat.000webhostapp.com/#/';
	window.open(
		fburl + url,
		'targetWindow',
		'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=450'
	);
}
// fb分享