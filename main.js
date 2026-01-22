let welcome = document.getElementById("welcome")

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        welcome.style.marginLeft="100vw"
    }, 1000);
    setTimeout(() => {
        welcome.style.display="none"
        console.log("welcome page display is ( none )")
    }, 2000);
})









let lines_p = document.getElementById("lines-page")
let tickets_p = document.getElementById("tickets-page")
let subscribe_p = document.getElementById("subscribe-page")

let lines_i = document.getElementById("lines-icon")
let tickets_i = document.getElementById("tickets-icon")
let subscribe_i = document.getElementById("subscribe-icon")



// *****************************************************************
lines_i.addEventListener("click", function () {
    lines_p.style.display="flex"
    setTimeout(() => {
        lines_p.style.opacity="1"
        lines_p.style.width="100vw"
        // lines_p.style.height="100vh"
    }, 10);
})
// *****************************************************************
tickets_i.addEventListener("click", function () {
    tickets_p.style.display="flex"
    setTimeout(() => {
        tickets_p.style.opacity="1"
        tickets_p.style.width="100vw"
        // tickets_p.style.height="100vh"
    }, 10);
})
// *****************************************************************
subscribe_i.addEventListener("click", function () {
    subscribe_p.style.display="flex"
    setTimeout(() => {
        subscribe_p.style.opacity="1"
        subscribe_p.style.width="100vw"
        // subscribe_p.style.height="100vh"
    }, 10);
})



























// mobile app mode

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js")
    .then(() => console.log("SW registered"))
    .catch(err => console.error(err));
}


let map = document.getElementById("map")
map.addEventListener("click", function () {
    window.open(
        "https://www.google.com/maps/dir/?api=1&origin=محطة+أ&destination=محطة+ب&travelmode=transit"//,
        // "_blank"
    );
})

// mobile app mode