const buttonsEl=document.querySelectorAll("button");
const inputfieldEl=document.getElementById("result");

for (let i=0;i< buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click",() => {
        const buttonValue=buttonsEl[i].textContent;
        if(buttonValue === "C"){
            clearresult();
        }else if(buttonValue === "="){
            calculateresult();
        }else{
            appendvalue(buttonValue);
        }
    }
    
    );
}
    function clearresult(){
        inputfieldEl.value="";

    }
function calculateresult(){
inputfieldEl.value=eval(inputfieldEl.value);

}
function appendvalue(buttonValue){
inputfieldEl.value += buttonValue;
}