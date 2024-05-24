const body = document.querySelector("body");
function createSection() {
	// section
	const newSection = document.createElement("section");
	console.log(newSection);

	// h2
	const newH2 = document.createElement("h2");
	newH2.textContent = "Section 3";
	newSection.appendChild(newH2);

	// p
	const newP = document.createElement("p");
	newP.textContent =
		"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dignissimos natus fugit mollitia, cumque quam maxime qui ad commodi. Dignissimos vel a quos sed earum quisquam nobis doloribus, repellendus perspiciatis.";
	newSection.appendChild(newP);

	body.appendChild(newSection);
}
for (let i = 1; i <= 100; i++) {
	createSection();
}
