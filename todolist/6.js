const formEl=document.querySelector(".form");
const inputEl=document.querySelector(".input");
const ulEl=document.querySelector(".list");
//  let list= JSON.parse(localStorage.getItem("list"));
//  list.forEach(task=>{
    // toDoList(task)
//  })
formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    toDoList();
})

function toDoList(task){
let newTask = inputEl.value;
if(task){
    newTask=task.name;
}
const liEl = document.createElement("li");
liEl.innerText = newTask;
ulEl.appendChild(liEl)
inputEl.value=""
const checkBtnEl=document.createElement("div")
checkBtnEl.innerHTML=`<i class="fa-solid fa-square-check">`
liEl.appendChild(checkBtnEl);
const trashBtnEl=document.createElement("div")
trashBtnEl.innerHTML=`<i class="fa-solid fa-trash">`
liEl.appendChild(trashBtnEl);
checkBtnEl.addEventListener("click",()=>{
    liEl.classList.toggle("checked")
    // updatelocalstorge();

});
trashBtnEl.addEventListener("click",()=>{
    liEl.remove();
    // updatelocalstorge();

});
// updatelocalstorge();
}


// function updatelocalstorge(){
//     const liEls=document.querySelector("li")
//     let list=[];
//     liEls.forEach(liEl=>{
//         list.push({
// name:liEl.innerText,
// checked:liEl.classList.
// contains("checked")

//      });
//     });
//     localStorage.setItem("list",JSON.stringify(list));
// }