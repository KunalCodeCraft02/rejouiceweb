
tl = gsap.timeline();


tl.from("#nav h2",{
    y:20,
    opacity:0,
    duration:0.3,
    delay:0.5
});
tl.from("#navLinks li",{
    y:20,
    opacity:0,
    duration:0.3,
    delay:0.5,
    stagger:0.2
})
tl.from("#bigText",{
    y:30,
    opacity:0,
    duration:0.3,
    delay:0.5
});
tl.from("#textDivPara",{
    y:20,
    opacity:0,
    duration:0.3,
    delay:0.5
})
tl.from("#Btns button",{
    y:20,
    opacity:0,
    duration:0.3,
    strigger:0.4,
    delay:0.5
})

gsap.to(".marque",{
    transform:"translateX(-200%)",
    repeat:-1,
    duration:3,
    
})








function navLinks() {
    let navBtn = document.querySelector("#navBtn");
    let navElem = document.getElementById("nav-elem");
    let flag = 0

    navBtn.addEventListener("click", function (dets) {
        if (flag == 0) {
            navElem.style.left = "0%";
            navElem.style.top = "15%"
            flag = 1
        }
        else {
            navElem.style.left = "-100%"
            flag = 0
        }
    });

};


let GallerySec = document.querySelector(".gallerySection");
let GalleryBtn = document.querySelector(".GalleryBtn");
let flag = 0
GalleryBtn.addEventListener("click", function () {
    if (flag == 0) {
        GallerySec.style.top = 0;
        flag = 1
    }
    else {
        GallerySec.style.top = "-100%";
        flag = 0
    }
})












navLinks();
