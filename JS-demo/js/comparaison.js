let a = "10";
let b = 5 + 5;

a = parseInt(a); // conversion en number => a = 10

console.log(a == b); // teste UNIQUEMENT la valeur => la chaîne "10" est convertie en number
console.log(a === b); // teste le type ET la valeur
console.log(a, typeof a);
