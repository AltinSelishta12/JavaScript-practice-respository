const gallery = document.querySelectorAll(".slides");

let Slide = 0

function ChangeImage (next = true){
    gallery[Slide].classList.remove("active");

    if(next){
        Slide = (Slide + 1) % gallery.length;
    }
    else{
        Slide = (Slide - 1 + gallery.length) % gallery.length;
    }
    gallery[Slide].classList.add("active");
}

document.querySelector(".next").addEventListener("click", function(){
    ChangeImage(true);
});
document.querySelector(".prev").addEventListener("click", function(){
    ChangeImage(false)
});

setInterval(() => ChangeImage(true), 8000);