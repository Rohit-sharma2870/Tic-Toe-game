let buttons=document.querySelectorAll(".button");
let resetbutton=document.querySelector(".reset");
let container=document.querySelector(".msgcontainer")
let newgame=document.querySelector(".newgame")
let winnertext=document.querySelector(".winner")


let winpattern=
[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];
let turno=true;


buttons.forEach((button)=>{

button.onclick=()=>{
   
if(turno==true){
button.innerText="X";
turno=false;

}
else{
button.innerText="O"
turno=true


}
button.disabled=true;

checkwinner()



}

})

let winner=(value)=>{
   
   
winnertext.innerText=`congratulations,winner is : ${value}`;
container.classList.remove("hide")
}
let disablebuttons=()=>{
buttons.forEach((button)=>{

    button.disabled=true;
})

}
let checkwinner=()=>{

    for (let  pattern of winpattern) {
   
 let val1=buttons[pattern[0]].innerText;
 let val2=buttons[pattern[1]].innerText;
 let val3=buttons[pattern[2]].innerText;

if(val1!="" && val2!="" && val3!=""){
    if(val1===val2 && val2===val3 ){
      winner(val1)
      disablebuttons()
   }}
}}


let reset=()=>{
   
enablesbuttons()

buttons.forEach(button=> {
    button.innerText=""
});
}
let enablesbuttons=()=>{
    buttons.forEach(button => {
        button.disabled=false;
        container.classList.add("hide")
    });
}

resetbutton.onclick=()=>{
    reset();
}
newgame.onclick=()=>{
    reset()
}



