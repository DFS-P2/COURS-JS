console.log("Hello, World !");

let nombre = 15;
console.log("La valeur de la variable nombre est : ", nombre);

let message = "une chaîne de caractères";
console.log(message);

// un booléen
let vraiFaux = false;
console.log(vraiFaux);
// tableau d'entiers
let tableauEntiers = [1, 2, 3, 4, 5];
console.log(tableauEntiers);

// tableau de chaînes (string)
let tableauChaines = ["Pierre", "Paul", "Jacques"];
console.log(tableauChaines);

// tableau mélangé
let tableauMelange = ["Toto", 12, "Truc"];
tableauMelange = ["ok"];
console.log(tableauMelange);

let n = 2; // déclaration + affectation
n = 3; // affectation
console.log(n);

const a = 5;

var truc = "Truc";
console.log(a);
console.log(truc);

if (true) {
	var tata = "tata"; // portée globale => à éviter la plupart du temps
}
console.log(tata);

if (true) {
	let toto = "toto"; // la variable toto n'est accessible que dans le bloc if
}
// console.log(toto);

console.log(typeof nombre); // number
console.log(typeof message); // string
console.log(typeof vraiFaux); // boolean
console.log(typeof tableauEntiers); // object
console.log(typeof tableauMelange); // object

let muche;
console.log(typeof muche); // undefined

console.log("Tout va bien.");
