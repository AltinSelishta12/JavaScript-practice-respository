const Form = document.querySelector('#Form');
const TextInput = document.querySelector("#TextInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector(".list");
const resetBtn = document.querySelector(".resetBtn");


Form.addEventListener("submit", function(e){
     e.preventDefault();
   if(TextInput.value.trim() === ""){
     e.preventDefault();
     TextInput.classList.add("active");

     setTimeout(() =>{
        TextInput.classList.remove("active");
     }, 1000);
     return
   }
})

 addBtn.addEventListener("click", function(e){
    e.preventDefault();
    const item = document.createElement("li");
    list.appendChild(item);

    item.textContent = TextInput.value;

    TextInput.value = "";
})

resetBtn.addEventListener("click", function(){
    list.innerHTML = "";
})
const item = document.createElement("li");
item.textContent = TextInput.value;




