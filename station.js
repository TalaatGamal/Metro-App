



let choose = document.getElementById("choose")
let popup = document.getElementById("popup")
let lines_r = document.getElementById("lines-r")
let types_div = document.getElementById("types")
let box = document.querySelectorAll(".box")

let types = [
    { btn: "type-box-1", box: "box-1" },
    { btn: "type-box-2", box: "box-2" },
    { btn: "type-box-3", box: "box-3" },
    ]

    document.querySelectorAll(".choose").forEach((choose) => {
    choose.addEventListener("click", () => {
        popup.style.display = "flex";
        types_div.style.display="flex"
        box.forEach(function (boxs) {
            boxs.style.display="none"
        })
        setTimeout(() => {
            popup.style.opacity = "1";
        }, 1);
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








// inputs
let input_1 = document.getElementById("startStation");
let input_2 = document.getElementById("endStation");

// buttons / triggers
let from_s = document.querySelector(".from-s");
let to_s   = document.querySelector(".to-s");

// input اللي هيتكتب فيه دلوقتي
let activeInput = null;

/* ===============================
    فتح الـ popup وتحديد input
================================ */

from_s.addEventListener("click", () => {
    activeInput = input_1;
    popup.style.display = "flex";
    setTimeout(() => {
        popup.style.opacity = "1";
    }, 10);
});

to_s.addEventListener("click", () => {
    activeInput = input_2;
    popup.style.display = "flex";
    setTimeout(() => {
        popup.style.opacity = "1";
    }, 10);
});

/* ===============================
    اختيار المحطة
================================ */

document.querySelectorAll(".blaces h2").forEach(h2 => {
    h2.addEventListener("click", () => {
        // النص من غير span
        let text = h2.childNodes[0].textContent.trim();

        if (activeInput) {
            activeInput.value = text;
        }

        // قفل الـ popup
        popup.style.opacity = "0";
        setTimeout(() => {
            popup.style.display = "none";
        }, 200);
    });
});
































































































































// hand ******************************************************
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
// hand ******************************************************










let btn = document.getElementById("btn")
let result = document.getElementById("result")
    btn.addEventListener("click", () => {
        result.style.display = "flex";
        setTimeout(() => {
            result.style.opacity = "1";
        }, 1);
    });