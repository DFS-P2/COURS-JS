const maChaine = "I love coding";
console.log(maChaine, typeof maChaine);

// concaténation avec +
const withJs = " with Javascript";
let message = maChaine + withJs;
console.log(message, typeof message);
// I love coding with Javascript string
const year = 2024;

message += " since " + year;
console.log(message, typeof message);

const prenom = "Toto";
const age = 10;

const message2 = "Je m'appelle " + prenom + " et j'ai " + age + " ans.";
console.log(message2, typeof message2);
const message3 = `Je m'appelle ${prenom} et j'ai ${age} ans.`; // template string
console.log(message3, typeof message3);

// méthode split => créer un tableau à partir d'une string
const text = "How are you doing today ?";
const myArray = text.split(" ");
console.log(myArray, typeof myArray);
console.log(text.length);

// replace
const visit = "Visit Microsoft";
const visitReplace = visit.replace("Microsoft", "W3Schools");
console.log(visitReplace);

// toUpperCase => majuscules
console.log(visit.toUpperCase());

// accès à un caractères d'un chaine de caractères => comme un tableau
console.log(visit[6]);
