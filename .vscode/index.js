const addBtn = document.querySelector("#addBtn");

let result = 1;

addBtn.addEventListener("click", function(){
    result = result - 2;

    document.getElementById("result").innerHTML = result;
})


