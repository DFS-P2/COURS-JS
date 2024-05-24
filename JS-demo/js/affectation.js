let a = 2;
const b = 3;
let c = 10;

a = a + 5; // 7
a += 5; // 12

c = c + 1; // 11
c += 1; // 12
c++; // 13

c += b; // c = c + b => 16

let d = 25;
d = d - 5;
d -= 5;
d--;

let e = 3;
e = e * 4;
e *= 2; // 24

let m = 4;

// 5 / 2 = 2 reste 1 => modulo
console.log(m % 3); // 1
console.log(m);
e = -e;
console.log(e);
