import './index.scss'


window.addEventListener("load", () => {

    
    const bg = document.querySelector(".background")
    const frame = document.querySelector(".frame")
    const modal = document.querySelector(".modal")
    const play = document.getElementById("play").querySelector("a")
    const close = document.querySelector(".close")
    const title = document.getElementById("title")
    const door = document.getElementById("door")
    

    const makeThingsVisible = () => {
        bg.style.opacity = 1
        frame.style.visibility = "visible"
        modal.style.display = "block"
    }

    if (window.chrome) {
        const click_msg = document.getElementById("click_msg")
        const startAudio = () => {
            Array.from(document.querySelectorAll("audio")).forEach(a => {
                a.play()
            })
        }
        click_msg.style.visibility = "visible"
        click_msg.classList.add("text-flicker-in-glow")

        window.addEventListener("click", startAudio, {
            once: true
        })

        setTimeout(() => {
            click_msg.classList.add("text-flicker-out-glow")
            
            setTimeout(() => {
                makeThingsVisible()
            }, 500)

        }, 1000)
    } else {
        makeThingsVisible()
    }

    const toggle = () => {
        modal.classList.toggle("show-modal")
        door.play()
    }

    // bg.click()


    console.log("Vd82dHVLtfMAP0+kOh2CZQp5rsc=")
    // console.log(lights.play())
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