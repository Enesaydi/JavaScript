const mes= 1992;
const name='eno';
console.log(` ${mes} doğumlu ${name} `);
// back stick ````var yeni tırnak işareti gibi
const hg='123';

console.log(hg);
//   number() =  +

const r =+prompt("enter the r:")  //üstten input uyarısı gelmesi

console.log(r);


console.log(Math.floor(r));    // her zaman en yakın alt tam sayıya yuvarlar
console.log(Math.ceil (r));    // her zaman en yakın üst tam sayıya yuvarlar
Math.random ();                // rastgele
console.log(Math.random ());   // rastgele
console.log(Math.ceil(Math.random ()*100));
console.log(Math.round  (r));   // en yakın tam sayıya 
console.log(Math.trunc  (r));   // Sayının tam kısmı

let b=4
console.log(b);
console.log(b=b*3);
console.log(b*=4);

number =3442;
const ones= number %10
const tens=Math.floor(number/10)%10
const hundred=Math.trunc(number/100)
console.log(ones, tens,hundred)

console.log(b>number) //false verir boolean a dönüştü.

let s=true;
console.log(s&&true)