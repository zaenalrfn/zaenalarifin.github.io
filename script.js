window.onscroll = function(){scrollUp()};

function scrollUp() {
	if ( document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
		document.getElementById('atas').style.opacity = '1';
	} else {
		document.getElementById('atas').style.opacity = '0';
	}
}
function topUp() {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
}