const yourChoice=document.getElementById("your-choice")
const pccho=document.getElementById("pc-choice")
const select=document.querySelector(".select")
let userSelect;
let pcR;
//scores
const yu=document.getElementById("you")
const it=document.getElementById("pc")
//modal selectors
const resultDiv = document.querySelector(".result-msg");
const containerEl = document.querySelector(".container");
const modalEl = document.querySelector(".modal-container");
const modalBtn = document.querySelector("#modal-ok");

const final=document.getElementById("final")


console.log(yu.innerText)

select.addEventListener("click", (e)=>{
  console.log(e)
  userSelect=e.target.getAttribute("alt");
  console.log(userSelect)
  if(userSelect==null){}else{
    yourChoice.innerHTML= `<img src="./assets/${userSelect}.png"></img>`;
    pc()
  }

})

const pcarr= ["rock","paper","scissors"]

function pc(){
  console.log(yu.innerText)
  pcR=pcarr[Math.floor(Math.random()*3)];
  console.log(pcR)
  pccho.innerHTML=`<img src="./assets/${pcR}.png"></img>`;
  Result()
  console.log(yu.innerText)
}

console.log(yu.innerText)



function Result(){
if (userSelect==pcR) {yu.innerText++;
  it.innerText++;
  resultDiv.classList.add("active");
  resultDiv.innerHTML = "It's a draw";
  containerEl.style.boxShadow = "3px 3px 10px 1px #FFC538";
  resultDiv.style.backgroundColor = "#FFC538";
}// else if (userSelect=="rock"&&pcR=="paper") {++it}
else if (userSelect=="rock"&&pcR=="scissors") {win()}
else if(userSelect=="scissors"&&pcR=="paper"){win()}
else if (userSelect=="paper"&&pcR=="rock"){win()}
else{resultDiv.classList.add("active")
      resultDiv.innerHTML="You lost"
      containerEl.style.boxShadow = "3px 3px 10px 1px #f b778b";
      resultDiv.style.backgroundColor = "#fb778b";
      it.innerText++;
}
if (yu.innerText=='10'){          //||it.innerText=='10'
  final.innerHTML = `💃 You Win🕺`;
  document.querySelector(".modal").style.backgroundColor = "#5AB7AC"
  modalBtn.style.color = "#5AB7AC"
  modalEl.classList.add("show");
  console.log(final.innerHTML);
  console.log(yu.innerText); 
  topScoreCheck()
}else if(it.innerText=='10'){
modalEl.classList.add("show");
}

}

function win(){
  resultDiv.classList.add("active");
  resultDiv.innerHTML = "You Win";
  containerEl.style.boxShadow = "3px 3px 10px 1px #5AB7AC";
  resultDiv.style.backgroundColor = "#5AB7AC";
  yu.innerText++;
}

modalBtn.addEventListener("click", ()=>{
    // modal.classList.remove("show")
    modalEl.style.display = "none"
    window.location.reload()         //      EZBER leeeeeee
})
