 /*let gr=Number(prompt("enter not"))

while(gr>101||gr<=0){
    console.log("grade be 0-100")
    console.log(gr)
    gr=Number(prompt("enter not"))
}
console.log("grade is "+gr)


let co=0
while(gr!=0){
    gr=Math.round(gr/10)
   // console.log(gr)
    co++
}
console.log(co)*/




let l=""
for(let x=1;x<11;x++){
    for(let y=1;y<11;y++){
        let res=x*y;
        console.log(res)
        l =l + res+ "\t"
    }
    l=l+"\n"
}
console.log(l)

