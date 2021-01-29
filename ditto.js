const text = document.querySelector('#text');
const string = "Hey! This Nipper's Beach, You Find Nothing extra text extra text extra text extra";

console.log(string.length);

async function type(str) {
	for (let i = 0; i < str.length; i++) {
		text.innerHTML = str.substring(0, i + 1);
		await sleep(100);
	}
}

function sleep(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, ms);
	});
}

type(string);

console.log(window.location);
