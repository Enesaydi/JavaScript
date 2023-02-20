//const healthy = confirm("Are you Healthy?");
//const age = prompt("How old are you?");

//console.log(age, healthy);


// falsy değerler

const x= 0//, false, undefined, "", NaN, Null;
console.log(x);

console.log(true&&0&&""&&false);

const no1=1;

if(no1==true){console.log("evet")}

n1=prompt("sayi 1");
//n2=prompt("sayi 2");
//n3=prompt("sayi 3");

let big=n1

//if(big<n2){big=n2}
//if(big<n3){big=n3}
console.log(`${big} is biggest`);


let r=20;
switch (r>20) {
    case true:
        console.log("evet büyük")
        break;
    case false:
        console.log("evet küçük")
            break;
    default:
        console.log("aynı")
        break;
}

const grade= n1>50 ? "passed":"failed"
console.log(grade);45

n1>50 ? console.log("passed"):console.log("failed")
