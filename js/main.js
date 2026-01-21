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