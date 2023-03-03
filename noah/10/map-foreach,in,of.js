const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join(" - "));    // Expected output: "Fire - Air - Water"


const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());      // Expected output: "1,2,a,1a


const array11 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array11.concat(array2);
console.log(array3);         // Expected output: Array ["a", "b", "c", "d", "e", "f"]


const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key, obj[key]);
}


const arr = [1, 2, 3];
for (const value of arr) {
  console.log(value);
}



const arrs = ["enes", "fatma", "ece"];
arrs.forEach((value) => {
  console.log(value);
});

const arra = [1, 2, 3];
let sum = 0;
arra.forEach((elem) => {
  sum += elem;
});
console.log(sum); // Output: 6


const uppern= arrs.map((nam)=>nam.toLocaleUpperCase() )
console.log(uppern)
console.log(arrs)
console.log(arrs.map((nam)=>nam.toLocaleUpperCase() ))