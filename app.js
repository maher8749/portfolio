const allSection = document.querySelector(".main-content");
const sections = document.querySelectorAll(".section");
const sectionBtn = document.querySelectorAll(".controls");
const sectionBtns = document.querySelectorAll(".control");




function pageTransition(){
    for(let i = 0; i <= sectionBtns.length; i++){
        sectionBtns[i].addEventListener("click", () => {
            document.querySelector(".active").classList.remove("active")
            sections[i].classList.add("active")  
            document.querySelector(".active-btn").classList.remove("active-btn")
            sectionBtns[i].classList.add("active-btn")
        })
    }

    

 
}
    // toggle theme
    const toggleBtn = document.querySelector(".theme-btn")
    toggleBtn.addEventListener("click", () =>{
    let element = document.body;
    element.classList.toggle("light-mode")
})
pageTransition()









// (function () {
//     [...document.querySelectorAll(".control")].forEach(button => {
//         button.addEventListener("click", function() {
//             document.querySelector(".active-btn").classList.remove("active-btn");
//             this.classList.add("active-btn");
//             document.querySelector(".active").classList.remove("active");
//             document.getElementById(button.dataset.id).classList.add("active");
//         })
//     });
//     document.querySelector(".theme-btn").addEventListener("click", () => {
//         document.body.classList.toggle("light-mode");
//     })
// })();







