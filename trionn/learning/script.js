const customCursor = document.querySelector(".custom-cursor")

document.addEventListener("mousemove", (e) => {
    customCursor.style.transform = `translate(${e.x - 10}px,${e.y - 10}px)`
})


gsap.registerPlugin(ScrollTrigger)

gsap.to(".video-cont", {
    scrollTrigger: {
        trigger: ".video-cont",
        start: "top 75%",
        end: "top 40%",
        scrub: 1
    },
    top: "165%",
    width: "95vw",
    height: "100vh",
    borderRadius:"25px"
})


const tl1 = gsap.timeline(
    {
        scrollTrigger: {
            trigger: ".sec-3-h-1",
            start: "top 95%",
            end: "top 15%",
            scrub: 1,
        }
    }
)

tl1.from(".sec-3-h-1", {
    x: "-20vw"
}, "sec2-h-animate")

tl1.to(".span-2",{
    width:"100%"
},"sec2-h-animate")


tl1.from(".sec-3-h-2", {
    x: document.querySelector(".sec-3-h-1").clientWidth-100,
}, "sec2-h-animate")


