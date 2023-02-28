
function pr(){
    console.log("hello")
}

pr()
//1
function oddoreven(num){return num % 2==0 ? "even" : "odd"}  
console.log(oddoreven(6));
//2
const oddoreven2=function (num){return num % 2==0 ? "even" : "odd"}  
console.log(oddoreven2(7));
//3

const volume = (a,b) => a * a * b * Math.PI    // silindir hacmi pi r kare * yükseklik
console.log(volume(1,4))

//fibonacci
/*
let c=1
let d=1
let s=2

let n=6 //kaçıncısı
for(i=2;i<n;i++){
    s=c+d
    c=d
    d=s
}
console.log(d)
*/

const fibo=(n)=>{
let c=1
let d=1
let s=2


for(i=2;i<n;i++){
    s=c+d
    c=d
    d=s
}
return d 
}
console.log(fibo(12));

//Recursive
function factorial(num) {
    if(num <= 1) { // temel koşul
      return 1;
    } else {
      return num * factorial(num - 1); // fonksiyon kendisini çağırıyor
    }
  }
  
  console.log(factorial(5)); // 120 
  

  //SCOPE

  function example1() {
    let x = 1;
  
    if (true) {
      let x = 2;
      console.log(x); // Output: 2
    }
  
    console.log(x); // Output: 1
  }
example1();



  