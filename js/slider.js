document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;
var left = 0;
var polosa = document.getElementById('polosa');

function sliderLeft() {
	left = left - 170;
	if (left < -560) {
		left = 0;
	}
	polosa.style.left = left + 'px';
}

function sliderRight() {
	left = left + 170;
	if (left > 0) {
		left = -560;
	}
	polosa.style.left = left  + 'px';
}