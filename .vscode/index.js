const images = document.querySelectorAll(".slides img");

current = 0;

function changeImage(next = true){
    images[current].classList.remove("active");

    if(true){
        current = (current + 1) % images.length;
    }
    else{
        current = (current - 1 + images.length) % images.length;
    }
    images[current].classList.add("active");
}

document.querySelector(".Next").addEventListener("click", () => changeImage(true));
document.querySelector(".prev").addEventListener("click", () => changeImage(false));

setInterval(() => changeImage(true), 8000);
