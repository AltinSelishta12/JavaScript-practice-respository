//Js practice

const btn = document.querySelector("#btn");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");

btn.addEventListener("click", function(){
    document.body.classList.toggle("active");

    sun.classList.toggle("active");
    moon.classList.toggle("hide")
});