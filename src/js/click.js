/**
 * Creates a click effect on the page at the clicked position
 * @param {MouseEvent} e - The mouse event triggered by the click
 */
function clickEffect(e){

	const effect = document.createElement("div");

	//set the class of the effect to clickEffect for the css
	effect.className = "clickEffect";

	//set the x and y position of the effect to the position of the click
	effect.style.top = `${e.clientY}px`;
	effect.style.left = `${e.clientX}px`;
	
	document.body.appendChild(effect);

	//removes the effect after the animation ends
	effect.addEventListener('animationend', () => effect.parentElement.removeChild(effect));
}

function changeBackground(e) {
	//document.body.backgroundColor = e;
	console.log
}
document.addEventListener('click',clickEffect);