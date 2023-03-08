//______________

//     REST (...)                      *geri kalanları belirtir
//______________

function myFunction(a, b, ...rest) {
  console.log(rest); // Output: [3, 4, 5]
}

myFunction(1, 2, 3, 4, 5);



//Concatenating arrays:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]


// const numbers= [1,2,3,4,5,6,33,23,77,3,2,]
// console.log(Math.max(numbers))         X  olmaz çünkü iterable |

const numbers= [1,2,3,4,5,6,33,23,77,3,2,]
console.log(Math.max(...numbers))


//spread
const arr4 = [1, 2, 3];
const arr5 = [...arr4];

console.log(arr5); // Output: [1, 2, 3]



//string spread

const xs="hani o saçlarını taş yaptığın çiçekler";
console.log(...xs)
const xy=[...xs]
console.log(xy)


//nested lar deep copy olmaz

const obj={a:1,b:4,v:45}
const copyobj=obj
console.log(obj)
copyobj.v=33
console.log(copyobj)


//    QUARYSELECTOR()

const heading = document.querySelector('h1');

const listItems = document.querySelectorAll('li');

const firstLink = document.querySelector('a');
const allParagraphs = document.querySelectorAll('p');
const allButtons = document.querySelectorAll('.btn');
const menuItems = document.querySelectorAll('li.active a');

// Select a single element by ID
const myElement = document.querySelector('#my-id');

// Select a single element by class name
const myClassElement = document.querySelector('.my-class');

// Select all elements with a certain class name
const allClassElements = document.querySelectorAll('.my-class');

// Select all elements with a certain tag name
const allDivs = document.querySelectorAll('div');

// Select all elements that have a certain attribute
const allLinks = document.querySelectorAll('a[href]');

// Select the first child element of a certain parent
const firstChild = document.querySelector('parent-selector > :first-child');

// Select all elements that match multiple CSS selectors
const allMatches = document.querySelectorAll('.class-1, .class-2, #my-id');

// Select all elements that match a certain pattern in their class attribute
const allPatternMatches = document.querySelectorAll('[class*=my-pattern]');

// Select all direct descendants of a certain parent element
const allDirectDescendants = document.querySelectorAll('parent-selector > *');




