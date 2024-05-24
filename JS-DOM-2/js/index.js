// sélection par tag name
const h2 = document.querySelectorAll("h2");
console.log(h2);

const h2ByTagName = document.getElementsByTagName("h2");
console.log(h2ByTagName);

// sélection par id
const parLorem = document.querySelector("#parLorem");
console.log(parLorem);

const parLoremById = document.getElementById("parLorem");
console.log(parLoremById);

// sélection par class name
const parBlue = document.querySelectorAll(".parBlue");
console.log(parBlue);
console.log(parBlue[0]);

const parBlueByClassName = document.getElementsByClassName("parBlue");
console.log(parBlueByClassName);
