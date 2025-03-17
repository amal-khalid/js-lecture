let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn =document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
let count=0;
const winPatterns =[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
const resetGame=()=>{
    turnO=true;
    count=0;
    enableboxes();
    msgcontainer.classlist.add("hide");
};
// add event listner

boxes. forEach((box) => {
box.addEventListener("click",()=>{
    if(turnO){
        box.innerText="O";
        turnO=false; 
        box.disabled=true;
    }
    else{
        box.innerText="X";
        turnO=true; 
        
    
    } 
    box.disabled=true;
    count++;
    let isWinner = checkWinner();
    if(count === 9 && !isWinner){
        gameDraw();
    }
    // checkWinner();
    // showWinner();
});
});
const gameDraw=()=>{
    msg.innerText=`Game was a draw.`;
    msgcontainer.classlist.remove("hide");
        disableboxes();

    
};


const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText= "";
    }
};
const showWinner=()=>{
    msg.innerText = `Congratulations,Winner is ${winner}`;
    msgcontainer.classlist.remove("hide");
    disableboxes();
};





const checkWinner =()=>{
    for(let Pattern of winPatterns) {
let pos1Val = boxes[Pattern[0]].innerText;
let pos2Val = boxes[Pattern[1]].innerText;
let pos3Val = boxes[Pattern[2]].innerText;

if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
    if(pos1Val === pos2Val && pos2Val === pos3Val){
        showWinner(pos1Val);
        return true;
    }
}



    }
};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

