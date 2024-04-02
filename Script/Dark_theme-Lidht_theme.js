let state_theme=false
const body = document.querySelector("body")
const bulb = document.querySelector(".logo__btn-img")
const nav = document.querySelectorAll(".nav__link")
const footer = document.querySelector("footer")
function theme(){
    if(state_theme===false){
        console.log("dark")
        state_theme=true
        body.style.background="#1f1f1f"
        bulb.style.filter="invert(1)"
        body.style.color="white"
        footer.style.filter="invert(1)"
        nav.forEach((el) => {
            el.style.color="white"
        }) 
    } else {
        console.log("light")
        state_theme=false  
        body.style.background="beige"
        bulb.style.filter="invert(0)"
        body.style.color="black"
        footer.style.filter="invert(0)"
        nav.forEach((el) => {
            el.style.color="black"
        }) 
    }
}
