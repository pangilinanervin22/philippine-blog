const title = document.getElementById("title");

const list = ["Kamusta Ka", "Magandang Araw", "Salamat Sayo "];

let index = 0;

setTimeout(() => {
	setInterval(() => {
		title.innerHTML = " ";
		const next = list[index++ % 3];
		let indexChart = 0;
		const typeEveryLetter = setInterval(() => {
			if (indexChart >= next.length) return clearInterval(typeEveryLetter);

			title.innerHTML += next[indexChart++];
		}, 100);
	}, 3000);
}, 5000);

const menuButton = document.getElementsByClassName("menu")[0];
const dropDown = document.getElementsByClassName("nav_dropdown")[0];

menuButton.addEventListener("click", function () {
	dropDown.classList.toggle("hide");
});

dropDown.addEventListener("click", function () {
	dropDown.classList.toggle("hide");
});
