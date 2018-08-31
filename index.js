import './index.scss'


window.addEventListener("load", () => {
    const bg = document.querySelector(".background")
    const frame = document.querySelector(".frame")
    const modal = document.querySelector(".modal")
    const play = document.getElementById("play").querySelector("a")
    const close = document.querySelector(".close")
    const title = document.getElementById("title")
    const lights = document.getElementById("lights")

    frame.style.visibility = "visible"
    modal.style.display = "block"


    const toggle = () => modal.classList.toggle("show-modal")
    play.addEventListener("click", toggle)
    close.addEventListener("click", toggle)


    const flicker = () => {
        bg.style.opacity = 0

        setTimeout(() => {
            console.log(bg.style.opacity)
            bg.style.opacity = 1
            setTimeout(flicker, Math.random() * 30000 + 1500)
        }, 750)

    }

    setTimeout(() => {
        bg.style.opacity = 0

        setTimeout(() => {
            bg.style.opacity = 1
            title.style.visibility = "visible"
            setTimeout(flicker, 5000)
        }, 1000)
    }, 3000)

    

    
})