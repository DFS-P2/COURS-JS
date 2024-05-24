const tab = ["Pierre", "Paul", "Jacques"];

console.log(tab, typeof tab);

console.log(tab[3]); // undefined

console.log(tab.length);

console.log("Tout va bien");

tab.unshift("Guy");

console.log(tab);

tab.push("Joseph");

console.log(tab);

tab.pop();

console.log(tab);

tab.shift();

console.log(tab);

// delete tab[0];

// console.log(tab);

const filles = ["Josiane", "Huguette"];

const toutLeMonde = filles.concat(tab);

console.log(toutLeMonde);

console.log(tab.toString());

const slicedTab = toutLeMonde.slice(3);
console.log(slicedTab);

tab.splice(1, 1, "Guy", "Joseph");

console.log(tab);
