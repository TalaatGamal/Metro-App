



let choose = document.getElementById("choose")
let lines_r = document.getElementById("lines-r")
let types_div = document.getElementById("types")

let types = [
    { btn: "type-box-1", box: "box-1" },
    { btn: "type-box-2", box: "box-2" },
    { btn: "type-box-3", box: "box-3" },
    ]

    document.querySelectorAll(".choose").forEach((choose) => {
    choose.addEventListener("click", () => {
        lines_r.style.display = "flex";
        });
    });

    types.forEach(item => {
    document.getElementById(item.btn).addEventListener("click", () => {
        // اقفل الكل
        types.forEach(i => {
        document.getElementById(i.box).style.display = "none"
        types_div.style.display="none"
        })
        // افتح المطلوب
        document.getElementById(item.box).style.display = "flex"
    })
})

































let inputs = document.querySelectorAll(".form input");
let hand = document.querySelector(".hand")

inputs.forEach(input => {
    input.addEventListener("mousedown", function () {
        hand.style.display="none"
    });
});
choose.addEventListener("mousedown", function () {
        hand.style.display="none"
    });