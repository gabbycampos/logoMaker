// SELECTORS
const form = document.querySelector('#logo-form');
const brandInput = document.querySelector('input[name="brandname"]');
const colorInput = document.querySelector('input[name="color"]');
const sizeInput = document.querySelector('input[name="fontsize"]');
const resultSection = document.querySelector('#results');

// LISTENERS
form.addEventListener('submit', function (e) {
	e.preventDefault();
	// get value from inputs
	//console.log(brandInput.value, colorInput.value, sizeInput.value);
	const logo = makeLogo(brandInput.value, colorInput.value, sizeInput.value);
	resultSection.appendChild(logo);
});

// FUNCTIONS
function makeLogo(text, color, size) {
	const newLogo = document.createElement('h2'); // can be span or whatever
	newLogo.innerText = text;
	newLogo.style.color = color;
	newLogo.style.fontSize = size + 'px';
	return newLogo;
}