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






if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("../mobile/sw.js");
}


let map = document.getElementById("map")
map.addEventListener("click", function () {
    window.open(
        "https://www.google.com/maps/dir/?api=1&origin=محطة+أ&destination=محطة+ب&travelmode=transit",
        "_blank"
    );
})