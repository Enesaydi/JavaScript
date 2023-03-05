
const list=[2000,3000,10000,20000,40000]

const fm = list.filter((s)=>s<3500);  
console.log(fm)

const xx=fm.map((s)=>s*1.2);   //list.filter((s)=>s<3500).map((s)=>s*1.2);
console.log(xx)



const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum); // Output: 15


const mul = numbers.reduce((a, c) => a * c,1);

console.log(mul); // Output: 15

//-------------------------------
//_______________________________
const to=list.filter((s)=>s<3500).map((s)=>s*1.2).reduce((a,c)=>a+c,0);
console.log(to)
//_______________________________




//*--------------
//!    OBJECT
//---------------

//1.literals;

const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY"
  }
};
console.log(person)

//------------------

//2.constructor;

const person2 = new Object();
person2.name = "John";
person2.age = 30;
person2.address = {
city: "New York",
state: "NY"
};
console.log(person2)
//derste;


function pers(id,ad,maas){
  this.tc=id
  this.name=ad
  this.salary=maas
}
const bir=new pers("23495847","enes",4000)
console.log(bir)
const iki=new pers("343488892","ece",7000)
console.log(iki)



//------------------

//3. Using object.create() method;

const personProto = {
  greeting: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const person3 = Object.create(personProto);
person3.name = "John";
person3.age = 30;
person3.address = {
  city: "New York",
  state: "NY"
};
console.log(person3)





// etc.

const person4 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY"
  }
};
console.log(person4.address["city"])


//Here is an example of shallow copying an array in JavaScript:

let originalArray = {
  y:44,
  x:[1, 2, 3]};
let shallowCopy = originalArray

shallowCopy.y += 4;
console.log(originalArray); // [y:48] 
console.log(shallowCopy); // [y:48]



//Here is an example of deep copying an object in JavaScript: yeni bir yer tanımlar

let originalObject = {name: "John", age: 30};
let deepCopy = JSON.parse(JSON.stringify(originalObject));

originalObject.age = 31;
console.log(originalObject); // {name: "John", age: 31}
console.log(deepCopy); // {name: "John", age: 30}
