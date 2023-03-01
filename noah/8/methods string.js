


console.log("hello")

let str1="this is string"

let str2='this is string'

let str3=new String("this is 'object' type=string")


console.log(typeof str1)
console.log(typeof str2)
console.log(typeof str3)

console.log(str1)
console.log(str2.length) 
console.log(str3)

console.log(str2.slice(-6,-2))
console.log(str2.slice(-2))

console.log(str2.substring(2,10))
console.log(str2.substring(2))
  
const result=str1.concat(" 2 ",str2.slice(-2)," ",str1)
console.log(result)

console.log(str1.includes("stri"))
console.log(str1.includes("Stri"))

console.log(str1.indexOf("stri"))  //bul: 7.sırada
console.log(str1.indexOf("i",3))      //3.sıradan sorakilerde bul
console.log(str1.indexOf("Stri"))  //yok = -1

//lastindexof bunun tersi olarak sağdan sola çalışır.

console.log(str1.search("i"))
console.log(str1.search(/i/))
console.log(str1.search(/STri/i))  


console.log(str1.replace("str","go"))


console.log(str1.split("i")) //
console.log(typeof str1.split("i"))
console.log(str1.split(" "))
console.log(str1.split(""))


console.log(str1.toLowerCase())
console.log(str1.toUpperCase())
let str4="   hayırlı işler "
console.log(str4.toUpperCase())           //HAYIRLI IŞLER
console.log(str4.toLocaleUpperCase('tr')) //HAYIRLI İŞLER

console.log(str4.trim())     //boşlukları yoksay

console.log(str4.startsWith("h"))
console.log(str4.startsWith(" "))




