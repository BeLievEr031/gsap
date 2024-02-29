const customCursor = document.querySelector(".custom-cursor")

document.addEventListener("mousemove", (e) => {
    customCursor.style.transform = `translate(${e.x - 10}px,${e.y - 10}px)`
})


gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".video-cont",
        start: "top 75%",
        end: "top 10%",
        scrub: 1,
    }
})

tl.to(".video-cont", {
    top: "165%",
    width: "95vw",
    height: "100vh",
    borderRadius: "25px",
})


const tl1 = gsap.timeline(
    {
        scrollTrigger: {
            trigger: ".sec-3-h-1",
            start: "top 95%",
            end: "top 15%",
            scrub: 1,
            // markers: true
        }
    }
)

tl1.from(".sec-3-h-1", {
    x: "-20vw"
}, "sec2-h-animate")

tl1.to(".span-2", {
    width: "100%"
}, "sec2-h-animate")


// gsap.to(, "sec2-h-animate")


tl1.from(".sec-3-h-2", {
    x: document.querySelector(".sec-3-h-1").clientWidth - 400,
}, "sec2-h-animate")


const tl2 = gsap.timeline(
    {
        scrollTrigger: {
            trigger: ".sec-3-content",
            start: "top 90%",
            end: "top 65%",
            scrub: 1,
            // markers:true
        }
    }
)

tl2.from(".sec-3-text span", {
    y: "100%",
    stagger: .5
})

gsap.to(".tiger-logo", {
    right: "20px",
    opacity:1,
    scrollTrigger: {
        trigger: ".logo-init",
        // markers: true,
        start:"top 90%",
        end:"top 70%",
        scrub:1
    }
})