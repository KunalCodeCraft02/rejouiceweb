function navAnimation() {
    var nav = document.querySelector("#nav");

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline();
        tl.to("#nav-bottom", {
            height: "23vh",
        })
        tl.to("#nav-part2 h5", {
            display: "block",
        });
        tl.from("#nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: "0.5"
            },
            duration: 0.2
        })
    });


    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline();
        tl.from("#nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: "0.2"
            },
            // duration:"0.5s"
        });
        tl.to("#nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: "0",
            duration: 0.2
        })
    })
};


function FlotingImg() {


    var rightelem = document.querySelectorAll(".right-elem");
    // var rightImg = document.getElementsByTagName("img")
    rightelem.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        });
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        });
        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 50,
                y: dets.y - elem.getBoundingClientRect().y - 150
            })
        })

    });

};

function VideoAnimation() {

    let Page3Center = document.querySelector("#page3-center");
    let video = document.querySelector("#page3 video");

    Page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            opacity: 1,
            transform: "scaleX(1) scaleY(1)",
        })

    })

    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            opacity: 0,
            transform: "scaleX(0.6) scaleY(0)",
            borderRadius: "30"
        })
    })
}


function VideoHoverPlay() {
    let secVideo = document.querySelector(".video");
    let videoImg = document.querySelector(".sec-right img");

    secVideo.addEventListener("mouseenter", function (dets) {
        videoImg.style.opacity = 0
        secVideo.play();

    });
    secVideo.addEventListener("mouseleave", function (dets) {
        videoImg.style.opacity = 1
        secVideo.pause();
    });

};


let leftDiv = document.querySelector(".leftdiv");
let Video2 = document.querySelector(".video2");
let leftImg = document.querySelector(".leftdiv img");


leftDiv.addEventListener("mouseenter",function(){
    leftImg.style.opacity = 0
    Video2.play();
});

leftDiv.addEventListener("mouseleave",function(){
    leftImg.style.opacity = 1
    Video2.pause();
});















navAnimation();
FlotingImg();
VideoAnimation();
VideoHoverPlay();
