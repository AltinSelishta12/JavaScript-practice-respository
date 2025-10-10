//Js practice

const container = document.querySelector(".container");
const clickBtn = document.querySelector("#clickBtn");
const addBtn = document.querySelector("#addBtn");
const deleteBtn = document.querySelector("#deleteBtn");
for(let i = 0; i <= 2; i++){
    const box = document.createElement("div");
    box.classList.add("active");
    container.appendChild(box);
}

clickBtn.addEventListener("click", function(){
    const boxes = document.querySelectorAll(".active");

    boxes.forEach(box =>{
      box.classList.toggle("change");  
    })
})

addBtn.addEventListener("click", function(){
    const box = document.createElement("div");
    box.classList.add("active");
    container.appendChild(box);
})

deleteBtn.addEventListener("click", function(){
    const boxes = document.querySelectorAll(".active");
     
    if(boxes.length > 0){
        boxes[0].remove();
    }
    else{
        alert("All cards deleted");
    }  
})