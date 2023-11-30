

window.addEventListener("load", ()=>{

let nav = document.querySelector(".nav")
let image = document.querySelector(".ANI")

window.addEventListener("scroll", ()=>{
    if (window.pageYOffset > 50) { 
        
        nav.classList.add("navx")
        image.style.display = "block"

        
    } if(window.pageYOffset < 50) {
        nav.classList.remove("navx")
        image.style.display = "none"
    }
})
})