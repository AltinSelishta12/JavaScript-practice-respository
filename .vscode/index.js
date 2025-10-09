const Form = document.querySelector("#Form");
const Name = document.querySelector("#Name");
const Age = document.querySelector("#Age");
const ShowText = document.querySelector("#ShowText");



Form.addEventListener("submit", function(event){
    event.preventDefault();

    if(Name.value.trim() === ""){
        Name.classList.add("active");

        setTimeout(() =>{
            Name.classList.remove("active");
        }, 2000);
        return
    }

    if(Age.value < 18){
       ShowText.textContent = "You are still a minor please change your age";

        setTimeout(() =>{
            ShowText.textContent = "";
        }, 3000);
    }
    else if(Age.value >= 18){
        ShowText.textContent = "Login rules completed and form is accepted";
        ShowText.style.color = "green";
        setTimeout(() =>{
             ShowText.textContent = "";
        }, 3000)
    }
});

