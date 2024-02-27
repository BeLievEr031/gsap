gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".c2",
        start: "top center",
        end: "center center",
        // markers: true,
        scrub: .5,
    }
})


tl.to(".cr1", {
    x: "-50%",
    y:10,
    rotate: "-10sdeg"
}, "topCard")

tl.to(".cr4", {
    x: "50%",
    y:10,
    rotate: "10deg"
}, "topCard")

tl.to(".cr2", {
    x: "-55%",
    y:-50,
    rotate: "-15deg",
}, "topCard")

tl.to(".cr5", {
    x: "55%",
    y:-50,
    rotate: "15deg",
}, "topCard")

tl.to(".cr3", {
    x: "-30%",
    y:-100,
    rotate: "-15deg",
}, "topCard")

tl.to(".cr6", {
    x: "30%",
    y:-100,
    rotate: "15deg",
}, "topCard")


const tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"h1",
        markers:true,
        start:"top 80%",
        scrub:1
    }
})


tl2.to("h1",{
    opacity:1,
    y:50,
    duration:1
})