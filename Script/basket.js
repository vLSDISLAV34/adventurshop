let elli = document.createElement("li"); 
elli.classList.add("gds_item")
let product_bs = document.createElement("h3")
const spawn = document.querySelector(".gds_list")
let product_bs_text = document.createTextNode("Java key")
product_bs.appendChild(product_bs_text)
let art_bs = document.createElement("img")
art_bs.src = "img/a1.jfif"
let price_bs_text = document.createTextNode("1899 РУБ")
price_bs.appendChild(price_bs_text)

function update(){
    spawn.appendChild(elli)
    elli.appendChild(product_bs)
    elli.appendChild(art_bs)
    elli.appendChild(price_bs_text)
}