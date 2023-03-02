

const arrays=["enes","salih", "nalan","kübra","ece"]

console.log(arrays)

console.log(arrays.length)

const ar2=new Array("enes","salih", "nalan") //2. yöntem-  3.= Array.of() ...
console.log(ar2)

console.log(arrays[3])
console.log(arrays[arrays.length-1])
//alternatif at() methodu var
console.log(arrays.at(-1))


let arraysl=["enes","salih", "nalan","kübra","ece"]
console.log(arraysl)
arraysl=["enes","salih", "nalan"]
console.log(arraysl)

const x=[8,9,56]
const xy=[1,2,3,4,5,6,x]
console.log(xy)
console.log(++xy[6][2])
console.log(x )

const months = ['Jan', 'March', 'April', 'June'];
console.log(months);
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]