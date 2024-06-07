let a = document.querySelector(".container")
let b = document.querySelector(".con-ele");


a.addEventListener("mouseenter",function(){
    b.style.opacity = 1
    let c = document.createElement("div");
    c.innerHTML = "hello world"
    console.log(c)
})

a.addEventListener("mouseleave",function(){
    b.style.opacity = 0
    
})


