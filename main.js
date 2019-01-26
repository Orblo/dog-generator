document.addEventListener('DOMContentLoaded', () => {
	styleElements();
	generateDog();
});

const styleElements = () => {
	let dogeElement = document.getElementById('doge');
	let margin = (dogeElement.offsetWidth / 2 + window.innerHeight / 2) / 4;

	dogeElement.style.marginTop = margin + 'px';
}

const generateDog = () => {
	findDoge((response) => {
		let dogeElement = document.getElementById('doge');
		dogeElement.style.backgroundImage = `url(${response.message})`;
	});
}

const findDoge = (callback) => {
	const API = 'https://dog.ceo/api/breeds/image/random';
	$.getJSON(API, (response) => {
		if(response.status === "success") {
			callback(response);
		}
	});
}