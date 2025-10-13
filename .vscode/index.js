//Js practice
const Form = document.querySelector("#Form");
const Comment = document.querySelector("#Comment");
const addTask = document.querySelector("#addTask");
const list = document.querySelector(".list");
const removeTask = document.querySelector("#removeTask");

Form.addEventListener("submit", function(event){

     if(Comment.value.trim() === ""){
          event.preventDefault();
          alert("Please fill the Comment field");
          return;
     }
});

addTask.addEventListener("click", function(){
     const li = document.createElement("li");
     list.appendChild(li);
     li.classList.add("active");

    li.textContent = Comment.value;

    Comment.value = "";

});
