const container = document.querySelector(".container");
const items = document.querySelectorAll(".item");
const Clickbtn = document.querySelector("#Clickbtn");



for(let i = 0; i <= 4; i++){
    const box = document.createElement("div");
    container.appendChild(box);
    box.classList.add("item");
}

Clickbtn.addEventListener('click', function(){
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.classList.toggle("active");
    })
})



