const titre = document.querySelector("#titre");
titre.innerHTML = "<p>JS</p>";
console.log(titre, typeof titre);

const sections = document.querySelectorAll("section");
console.log(sections[1]);

const pGreen = document.querySelectorAll(".green");
console.log(pGreen); // NodeList
titre.style.color = "yellow";

for (let i = 0; i < pGreen.length; i++) {
	pGreen[i].style.color = "green";
}

const paragraphes = document.querySelectorAll("p");
paragraphes[3].classList.add("blueCss");
// paragraphes[3].classList.remove("blueCss");
