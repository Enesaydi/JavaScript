var prm=Number(prompt("enter number"));
console.log(prm % 3 == 0)           // (8) false
console.log(prm % 4 == 0)           // (8) true          bi kere true sağlaması yeterlidir.
console.log(prm % 5 == 0)           // (8) false
console.log(prm % 6 == 0)           // (8) false
console.log(prm % 7 == 0)           // (8) false

let isprm=true

for(let i=2;i<prm;i++){
    if (prm % i == 0){
        console.log("it is not prime no.")
        isprm=false
        break //büyük sayılarda uzatmamak için
    }}
    if(isprm==true){console.log("it is  prime no.")}


while (prm<100) {
    console.log(prm);
    prm++;
    
}