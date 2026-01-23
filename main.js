// let welcome = document.getElementById("welcome")

// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(() => {
//         welcome.style.marginLeft="100vw"
//     }, 1000);
//     setTimeout(() => {
//         welcome.style.display="none"
//         console.log("welcome page display is ( none )")
//     }, 2000);
// })








let body = document.getElementById("body")
let lines_p = document.getElementById("lines-page")
let tickets_p = document.getElementById("tickets-page")
let subscribe_p = document.getElementById("subscribe-page")

let lines_i = document.getElementById("lines-icon")
let tickets_i = document.getElementById("tickets-icon")
let subscribe_i = document.getElementById("subscribe-icon")






// *****************************************************************
lines_i.addEventListener("click", function () {
    lines_p.style.display="flex"
    body.style.overflow="hidden"
    setTimeout(() => {
        lines_p.style.opacity="1"
        lines_p.style.width="100vw"
        // lines_p.style.height="100vh"
    }, 1);
})
// *****************************************************************
tickets_i.addEventListener("click", function () {
    tickets_p.style.display="flex"
    body.style.overflow="hidden"
    setTimeout(() => {
        tickets_p.style.opacity="1"
        tickets_p.style.width="100vw"
        // tickets_p.style.height="100vh"
    }, 1);
})
// *****************************************************************
subscribe_i.addEventListener("click", function () {
    subscribe_p.style.display="flex"
    body.style.overflow="hidden"
    setTimeout(() => {
        subscribe_p.style.opacity="1"
        subscribe_p.style.width="100vw"
        // subscribe_p.style.height="100vh"
    }, 1);
})
//*******************************************************************
document.querySelectorAll(".back").forEach(function (back) {
    back.addEventListener("click", function () {
        body.style.overflow="auto"
        document.querySelectorAll(".lsp").forEach(function (el) {
            el.style.width="0vw"
            el.style.opacity="0"
            setTimeout(() => {
                el.style.display="none"
            }, 400);
        })
    })
});







// sidebar

    let side_icon = document.getElementById("side-icon");
    let sidebar = document.getElementById("sidebar");

    let bars = document.getElementById("bars");
    let x = document.getElementById("x");

    side_icon.addEventListener("click", function () {
        
        if (getComputedStyle(sidebar).right === "0px") {
            
            sidebar.style.right = "-300px";
            sidebar.style.opacity = "0";
            setTimeout(() => {
                sidebar.style.display = "none";
            }, 300);
            
            bars.style.display = "block";
            x.style.display = "none";
        } else {
            
            sidebar.style.display = "flex";
            setTimeout(() => {
                sidebar.style.right = "0px";
                sidebar.style.opacity = "1";
            }, 10);
            bars.style.display = "none";
            x.style.display = "block";
        }
    });


// sidebar






















// mobile app mode

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js")
    .then(() => console.log("SW registered"))
    .catch(err => console.error(err));
}

// mobile app mode