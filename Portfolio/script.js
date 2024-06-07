document.addEventListener("DOMContentLoaded", function() {
    let a = document.getElementById("logo");
    let b = document.querySelector(".resnav");

    a.addEventListener("click", function() {
        if (b.style.display === "none") {
           
            b.style.display = "block";
        } else {
            b.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    let a = document.getElementById("logo");
    let b = document.querySelector(".resnav");

    a.addEventListener("click", function() {
        b.classList.toggle("show-resnav");
        setTimeout(function() {
            if (!b.classList.contains("show-resnav")) {
                b.style.display = "none"; // Hide resnav after transition
            }
        }, 300); // Adjust delay according to transition duration
    });
});

