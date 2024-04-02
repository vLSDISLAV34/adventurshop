const button1=document.getElementById("a1");
let state_button=false
let price=0 
let price_key=document.querySelector (".price__game").innerHTML 
const pricebasket=document.querySelector (".price__basket")
price_key=parseInt(price_key)
function in_cart(){
    if(state_button===false){
        button1.innerHTML="В корзине";
        button1.style.background="#D63F1F"
        button1.style.transition="1s"
        state_button=true
        price=price+price_key
    } else{
        button1.innerHTML="купить";
        button1.style.background="rgb(136, 219, 27)"
        button1.style.transition="1s"
        state_button=false
        price=price-price_key
    }
    console.log(price)
    pricebasket.innerHTML=price+" РУБ"
}

