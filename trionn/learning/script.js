const customCursor = document.querySelector(".custom-cursor")

document.addEventListener("mousemove", (e) => {
    console.log(e.x,e.y);
    customCursor.style.transform = `translate(${e.x - 10}px,${e.y - 10}px)`
})


gsap.registerPlugin(ScrollTrigger)

gsap.to(".video-cont", {
    scrollTrigger: {
        trigger: ".video-cont",
        // markers: true,
        start: "top 65%",
        end:"top 40%",
        scrub: 1
    },
    top:"180%",
    width: "95vw",
    height:"120vh",
})