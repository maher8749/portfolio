const allSection = document.querySelector(".main-content");
const sections = document.querySelectorAll(".section");
const sectionBtn = document.querySelectorAll(".controls");
const sectionBtns = document.querySelectorAll(".control");


// button click active class
function pageTransition(){
    for(let i = 0; i <= sectionBtns.length; i++){
        sectionBtns[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace(" active-btn", '');
            this.className += ' active-btn';
        })

    }
    
    // section active 
    allSection.addEventListener("click", (e) => {
        const id = e.target.dataset.id;

        if(id){
            // remove selected from other btns
            sectionBtn.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add("active")
             
            // hide other section 
            sections.forEach((section) => {
                section.classList.remove("active")
            })

            const element = document.getElementById(id)
            element.classList.add("active")
        }
    })
    
        
}

pageTransition();



