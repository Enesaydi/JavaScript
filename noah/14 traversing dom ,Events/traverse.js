//_______________________
// Yukarı yönde traverse
//_______________________
//                            parentelement, parentnode

const list=document.querySelector("li")
console.log(list)
console.log(list.parentElement)
console.log(list.parentElement.parentElement)
console.log(list.parentNode.parentNode.parentNode)

//_______________________
// Aşağı yönde traverse
//_______________________

const sect=document.querySelector(".sec")
console.log(sect.children)
console.log(sect.children[0])

sect.children[0].style.color="red"
sect.children[2].style.color="blue"

console.log(sect.children[2])


// Select the first child element of a given element
const head=document.querySelector("header")
const firstChild = head.firstElementChild;
console.log(firstChild)

// Select the last child element of a given element
const lastChild = sect.lastElementChild;
console.log(lastChild)

//_______________________
// Yatay yönde traverse
//_______________________
//                             nextElementSibling, previusElementSibling


const l1=list.nextElementSibling
console.log(l1.nextElementSibling.nextElementSibling)
console.log(l1.nextElementSibling)
console.log(l1)
console.log(l1.previusElementSibling)






//_________________________________________________


// create an array of data to display
const data = ['apple', 'banana', 'orange'];
console.log(data)
// get an existing element in the DOM


// loop through the data array and create a new <li> element for each item
data.forEach(item => {
  const newLi = document.createElement('li');
  const newText = document.createTextNode(item);
  newLi.appendChild(newText);
  const he=head.appendChild(newLi);
console.log(he)
});


//classlist

// HTML: <div id="my-div" class="foo bar"></div>

const myDiv = document.getElementById('my-div');
myDiv.classList.add('baz'); // adds "baz" class to the div
myDiv.classList.remove('foo'); // removes "foo" class from the div
myDiv.classList.contains('bar'); // returns true

console.log(myDiv)

// HTML: <div id="my-div2" data-color="blue"></div>

myDiv2 = document.getElementById('my-div2');
const color = myDiv.getAttribute('data-color'); // returns "blue"
console.log(myDiv2)



//____________-
//   EVENTS
//____________-

const my = document.querySelector("header h1");
console.log(my)
my.onmouseover= function(){
  my.style.color="blue"
}

const inpu =document.getElementById("inp")
const bu=document.getElementById("but")
const ul = document.querySelector("ul")
console.log(inpu.value)
console.log(bu)

bu.addEventListener("click",() =>{
ul.innerHTML += "<li>"+inpu.value+"</li>"
})