
const circlesButtons = document.querySelectorAll(".number");

const rating = document.querySelector("#numberselect");

const submit = document.querySelector("#submit");

const activethank = document.getElementById("thank-you");

const main = document.getElementById("main");
 
circlesButtons.forEach((circlesButtons)=>{
    circlesButtons.addEventListener("click", ()=>{
        rating.innerHTML = circlesButtons.innerHTML;
    })
});

submit.addEventListener("click", ()=>{
    activethank.classList.toggle("active");
    main.classList.toggle("active");
})
