//______________

//     JSON
//______________

/*
JSON (JavaScript Object Notation) is a lightweight data format used for exchanging data between a client and a server. It is easy for humans to read and write and easy for machines to parse and generate. JSON is often used as a data storage and communication format in web applications.

JSON is a collection of key-value pairs, where the key is always a string and the value can be a string, number, object, array, boolean, or null. JSON is represented in JavaScript as an object literal.

Here is an example of a JSON object in JavaScript: */

const person = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
  address: {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  },
  phoneNumbers: [
    {
      "type": "home",
      "number": "555-1234"
    },
    {
      "type": "work",
      "number": "555-5678"
    }
  ]
};


// convert JavaScript object to JSON string
const personJSON = JSON.stringify(person);

// output JSON string
console.log(personJSON);

// convert JSON string back to JavaScript object
const personObject = JSON.parse(personJSON);

// output JavaScript object
console.log(personObject);

//______________________________________________________________
/*             Destructuring

in JavaScript is a powerful feature that allows 
you to unpack values from arrays, objects, and other data structures 
into separate variables. Here are some examples of how to use 
destructuring in JavaScript:*/


const myArray = [1, 2, 3, 4, 5];

const [first, second, ...rest] = myArray;
console.log(first,second,rest); // 1  // 2  [3, 4, 5]


const myObj1 = { name: 'John', age: 30, city: 'New York' };

const { name1, age } = myObj1;

console.log(name1); // 'John'
console.log(age); // 30


//        Rename
const myObj2 = { name: 'John', age: 30, city: 'New York' };

const { name: fullName, age: years } = myObj2;

console.log(fullName); // 'John'
console.log(years); // 30



//       NESTED  destructure  ;

const myObj3 = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const { name, address: { city } } = myObj3;

console.log(name); // 'John'
console.log(city); // 'New York'
