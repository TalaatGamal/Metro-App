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







// window.addEventListener("scroll", () => {
//     let air_options = document.getElementById("air-options")
//     const scrollTop = window.scrollY;
//     const pageHeight =
//         document.documentElement.scrollHeight - window.innerHeight;

//     const scrollPercent = (scrollTop / pageHeight) * 100;

//     if (scrollPercent > 10) {
//         console.log("عدّينا 50% من الصفحة");
//         air_options.style.display="flex"
//         setTimeout(() => {
//             air_options.style.bottom="20px"
//             air_options.style.opacity="1"
//         }, 100);
//     }
//     if (scrollPercent < 10) {
//             air_options.style.bottom="40px"
//             air_options.style.opacity="0"
//         setTimeout(() => {
//             air_options.style.display="none"
//         }, 1000);
//     }
// });






const air_options = document.getElementById("air-options");
let shown = false;

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / pageHeight) * 100;

    if (scrollPercent > 10 && !shown) {
        shown = true;
        air_options.style.display = "flex";
        setTimeout(() => {
            air_options.style.bottom = "30px";
            air_options.style.opacity = "1";
        }, 50);
    } else if (scrollPercent <= 10 && shown) {
        shown = false;
        air_options.style.bottom = "60px";
        air_options.style.opacity = "0";
        setTimeout(() => {
            air_options.style.display = "none";
        }, 500);
    }
});


let top_arrow = document.getElementById("top-arrow");

top_arrow.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
    });
});










































// mobile app mode

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js")
    .then(() => console.log("SW registered"))
    .catch(err => console.error(err));
}

// mobile app mode