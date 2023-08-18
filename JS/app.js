let barras = [document.getElementById("hr1"), document.getElementById("hr2"), document.getElementById("hr3")]
let girar = true
let menu = document.getElementById("menu")

let btnsI = document.getElementsByClassName("btn-i")
let btnsR = document.getElementsByClassName("btn-r")
let form = document.getElementById("form")
let cerrar = document.getElementById("cerrar")
let abrir= true
for (let i = 0; i < barras.length; i++){
    barras[i].addEventListener("click",() => {
        menu.style.transition = "0.5s"
        barras[i].style.transition = "0,5"
        if (girar){
        barras[i].style.transition = "0.5s"
        barras[1].style.opacity = 0
        barras[0].style.transform = "rotate(45deg)"
        barras[0].style.top = "12px"
        barras[2].style.right = "1px"
        barras[2].style.transform = "rotate(-45deg)"
        barras[2].style.bottom = "15px"
        barras[2].style.left = "2px"
        girar = false
        menu.style.zIndex = 2000
        menu.style.opacity = 1
    } else {
        barras[i].style.transition = "0.5s"
        barras[1].style.opacity = 1
        barras[0].style.transform = "rotate(0deg)"
        barras[0].style.top = "0px"
        barras[2].style.right = "0px"
        barras[2].style.transform = "rotate(0deg)"
        barras[2].style.bottom = "0px"
        barras[2].style.left = "0px"
        menu.style.zIndex = 0
        menu.style.opacity = 0
        girar = true
    }
    })
}

for (let i = 0; i < btnsI.length; i++){
    btnsI[i].addEventListener("click",() => {
        if (abrir) {
            form.style.opacity = 1
            form.style.zIndex = 2300
            form.style.transition = "0.5s"
            abrir = false
        } 
    })
}

for (let i = 0; i < btnsR.length; i++){
    btnsR[i].addEventListener("click",() => {
        if (abrir) {
            form.style.opacity = 1
            form.style.zIndex = 2300
            form.style.transition = "0.5s"
            abrir = false
        } 
    })
}

cerrar.addEventListener("click",() => {
    form.style.opacity = 0
    form.style.zIndex = -100
    form.style.transition = "0.5s"
    abrir = true
})
