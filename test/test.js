
    // /* ================== CONFIG ================== */
    // const METRO_CONFIG = {
    // lines: {
    //     1: { boxId: "box-1", waitTime: 3 },
    //     2: { boxId: "box-2", waitTime: 3 },
    //     3: { boxId: "box-3", waitTime: 5 }
    // },

    // ticketPrices: [
    //     { max: 9, price: 8 },
    //     { max: 16, price: 10 },
    //     { max: 23, price: 15 },
    //     { max: 39, price: 20 }
    // ],

    // timePerStation: 2 // دقيقة لكل محطة
    // };

    // /* ================== HELPERS ================== */

    // // جلب المحطات من blaces فقط
    // function getStationsFromBox(boxId) {
    // const box = document.getElementById(boxId);
    // const stations = [...box.querySelectorAll(".blaces h2")];

    // return stations.map(h2 => ({
    //     name: h2.childNodes[0].textContent.trim(),
    //     index: Number(h2.querySelector("span").textContent)
    // }));
    // }

    // // البحث عن محطة
    // function findStation(stations, stationName) {
    // return stations.find(s => s.name === stationName);
    // }

    // // حساب سعر التذكرة
    // function calculatePrice(stationsCount) {
    // return METRO_CONFIG.ticketPrices.find(p => stationsCount <= p.max).price;
    // }

    // /* ================== RESULT UI ================== */

    // function showResult(data) {
    // let result = document.getElementById("result");

    // if (!result) {
    //     result = document.createElement("div");
    //     result.id = "result";
    //     result.style.cssText = `
    //     margin-top:20px;
    //     padding:16px;
    //     border-radius:12px;
    //     background:#0f172a;
    //     color:#fff;
    //     line-height:1.8;
    //     `;
    //     document.querySelector(".form").appendChild(result);
    // }

    // result.innerHTML = `
    //     <h2>🚇 تفاصيل الرحلة</h2>
    //     <p>الخط: ${data.line}</p>
    //     <p>عدد المحطات: ${data.stationsCount}</p>
    //     <p>زمن الرحلة: ${data.travelTime} دقيقة</p>
    //     <p>زمن الانتظار: ${data.waitTime} دقيقة</p>
    //     <p><strong>الوقت الكلي: ${data.totalTime} دقيقة</strong></p>
    //     <p><strong>سعر التذكرة: ${data.price} جنيه</strong></p>
    // `;
    // }

    // /* ================== MAIN ================== */

    // const startInput = document.getElementById("startStation");
    // const endInput = document.getElementById("endStation");
    // const btn = document.getElementById("btn");

    // btn.addEventListener("click", () => {
    // const from = startInput.value.trim();
    // const to = endInput.value.trim();

    // if (!from || !to) {
    //     alert("من فضلك اختار محطة البداية والوصول");
    //     return;
    // }

    // for (const lineNumber in METRO_CONFIG.lines) {
    //     const line = METRO_CONFIG.lines[lineNumber];
    //     const stations = getStationsFromBox(line.boxId);

    //     const startStation = findStation(stations, from);
    //     const endStation = findStation(stations, to);

    //     if (startStation && endStation) {
    //     const stationsCount = Math.abs(endStation.index - startStation.index);
    //     const travelTime = stationsCount * METRO_CONFIG.timePerStation;
    //     const totalTime = travelTime + line.waitTime;
    //     const price = calculatePrice(stationsCount);

    //     showResult({
    //         line: lineNumber,
    //         stationsCount,
    //         travelTime,
    //         waitTime: line.waitTime,
    //         totalTime,
    //         price
    //     });
    //     return;
    //     }
    // }

    // alert("المحطتين مش موجودين على نفس الخط ❌");
    // });










































    // /* ================== CONFIG ================== */
    // const METRO_CONFIG = {
    // lines: {
    //     1: { boxId: "box-1", waitTime: 3 },
    //     2: { boxId: "box-2", waitTime: 3 },
    //     3: { boxId: "box-3", waitTime: 5 }
    // },

    // ticketPrices: [
    //     { max: 9, price: 8 },
    //     { max: 16, price: 10 },
    //     { max: 23, price: 15 },
    //     { max: 39, price: 20 }
    // ],

    // timePerStation: 2 // دقيقة لكل محطة
    // };

    // /* ================== HELPERS ================== */

    // // جلب المحطات من blaces فقط
    // function getStationsFromBox(boxId) {
    // const box = document.getElementById(boxId);
    // const stations = [...box.querySelectorAll(".blaces h2")];

    // return stations.map(h2 => ({
    //     name: h2.childNodes[0].textContent.trim(),
    //     index: Number(h2.querySelector("span").textContent)
    // }));
    // }

    // // البحث عن محطة
    // function findStation(stations, stationName) {
    // return stations.find(s => s.name === stationName);
    // }

    // // حساب سعر التذكرة
    // function calculatePrice(stationsCount) {
    // return METRO_CONFIG.ticketPrices.find(p => stationsCount <= p.max).price;
    // }

    // // المحطات اللي هتمر عليها (شامل البداية والنهاية)
    // function getPassedStations(stations, startIndex, endIndex) {
    // const from = Math.min(startIndex, endIndex);
    // const to = Math.max(startIndex, endIndex);

    // return stations.filter(
    //     s => s.index >= from && s.index <= to
    // );
    // }

    // /* ================== RESULT UI ================== */

    // function showResult(data) {
    // let result = document.getElementById("result");

    // if (!result) {
    //     result = document.createElement("div");
    //     result.id = "result";
    //     result.style.cssText = `
    //     margin-top:20px;
    //     padding:16px;
    //     border-radius:12px;
    //     background:#0f172a;
    //     color:#fff;
    //     line-height:1.8;
    //     `;
    //     document.querySelector(".form").appendChild(result);
    // }

    // result.innerHTML = `
    //     <h2>🚇 تفاصيل الرحلة</h2>
    //     <p>الخط: ${data.line}</p>
    //     <p>عدد المحطات: ${data.stationsCount}</p>
    //     <p>زمن الرحلة: ${data.travelTime} دقيقة</p>
    //     <p>زمن الانتظار: ${data.waitTime} دقيقة</p>
    //     <p><strong>الوقت الكلي: ${data.totalTime} دقيقة</strong></p>
    //     <p><strong>سعر التذكرة: ${data.price} جنيه</strong></p>
    //     <p>المحطات:</p>
    //     <p style="font-size:14px">
    //     ${data.passedStations.map(s => s.name).join(" ← ")}
    //     </p>
    // `;
    // }

    // /* ================== MAIN ================== */

    // const startInput = document.getElementById("startStation");
    // const endInput = document.getElementById("endStation");
    // const btn = document.getElementById("btn");

    // btn.addEventListener("click", () => {
    // const from = startInput.value.trim();
    // const to = endInput.value.trim();

    // if (!from || !to) {
    //     alert("من فضلك اختار محطة البداية والوصول");
    //     return;
    // }

    // for (const lineNumber in METRO_CONFIG.lines) {
    //     const line = METRO_CONFIG.lines[lineNumber];
    //     const stations = getStationsFromBox(line.boxId);

    //     const startStation = findStation(stations, from);
    //     const endStation = findStation(stations, to);

    //     if (startStation && endStation) {
    //     const passedStations = getPassedStations(
    //         stations,
    //         startStation.index,
    //         endStation.index
    //     );

    //     const stationsCount = passedStations.length;
    //     const travelTime =
    //         stationsCount * METRO_CONFIG.timePerStation;
    //     const totalTime = travelTime + line.waitTime;
    //     const price = calculatePrice(stationsCount);

    //     showResult({
    //         line: lineNumber,
    //         stationsCount,
    //         travelTime,
    //         waitTime: line.waitTime,
    //         totalTime,
    //         price,
    //         passedStations
    //     });

    //     return;
    //     }
    // }

    // alert("المحطتين مش موجودين على نفس الخط ❌");
    // });






















    // /* ================== CONFIG ================== */
    // const METRO_CONFIG = {
    // lines: {
    //     1: { boxId: "box-1", waitTime: 3 },
    //     2: { boxId: "box-2", waitTime: 3 },
    //     3: { boxId: "box-3", waitTime: 5 }
    // },

    // ticketPrices: [
    //     { max: 9, price: 8 },
    //     { max: 16, price: 10 },
    //     { max: 23, price: 15 },
    //     { max: 39, price: 20 }
    // ],

    // timePerStation: 2
    // };

    // /* ================== HELPERS ================== */

    // // جلب المحطات من blaces فقط
    // function getStationsFromBox(boxId) {
    // const box = document.getElementById(boxId);
    // const stations = [...box.querySelectorAll(".blaces h2")];

    // return stations.map(h2 => ({
    //     name: h2.childNodes[0].textContent.trim(),
    //     index: Number(h2.querySelector("span").textContent)
    // }));
    // }

    // // البحث عن محطة
    // function findStation(stations, name) {
    // return stations.find(s => s.name === name);
    // }

    // // حساب سعر التذكرة
    // function calculatePrice(count) {
    // return METRO_CONFIG.ticketPrices.find(p => count <= p.max).price;
    // }

    // // المحطات الممرور عليها
    // function getPassedStations(stations, startIndex, endIndex) {
    // const from = Math.min(startIndex, endIndex);
    // const to = Math.max(startIndex, endIndex);

    // return stations.filter(
    //     s => s.index >= from && s.index <= to
    // );
    // }
    // /* ================== end HELPERS ================== */
    
    //     function updateLineTitle(boxStationId, lineNumber, from, to) {
    // const box = document.getElementById(boxStationId);
    // const title = box.querySelector(".type h2");

    // // اسم الخط بالعربي
    // const lineNames = {
    //     1: "الخط الأول",
    //     2: "الخط الثاني",
    //     3: "الخط الثالث"
    // };

    // // نحافظ على السبان ومقربش منها
    // const spanHTML = `
    //     <span>
    //     ${from}
    //     <span><i class="fa-solid fa-arrow-left-long arrow"></i></span>
    //     ${to}
    //     </span>
    // `;

    // title.innerHTML = `${lineNames[lineNumber]} ${spanHTML}`;
    // }


    // /* ================== RENDER STATIONS ================== */

    // function renderStations(boxStationId, passedStations) {
    // const box = document.getElementById(boxStationId);
    // const blaces = box.querySelector(".blaces");

    // // مسح أي عرض قديم
    // blaces.innerHTML = "";

    // passedStations.forEach(station => {
    //     const h2 = document.createElement("h2");
    //     h2.textContent = station.name;

    //     // span يتساب لوحده (مهم)
    //     const span = document.createElement("span");
    //     span.textContent = station.index;

    //     h2.appendChild(span);
    //     blaces.appendChild(h2);
    // });
    // }

    // /* ================== MAIN ================== */

    // const startInput = document.getElementById("startStation");
    // const endInput = document.getElementById("endStation");
    // const btn = document.getElementById("btn");

    // btn.addEventListener("click", () => {
    // const from = startInput.value.trim();
    // const to = endInput.value.trim();

    // if (!from || !to) {
    //     alert("من فضلك اختار محطة البداية والوصول");
    //     return;
    // }

    // for (const lineNumber in METRO_CONFIG.lines) {
    //     const line = METRO_CONFIG.lines[lineNumber];
    //     const stations = getStationsFromBox(line.boxId);

    //     const startStation = findStation(stations, from);
    //     const endStation = findStation(stations, to);

    //     if (startStation && endStation) {
    //     const passedStations = getPassedStations(
    //         stations,
    //         startStation.index,
    //         endStation.index
    //     );

    //     const stationsCount = passedStations.length;
    //     const price = calculatePrice(stationsCount);

    //     // عرض المحطات في box-station
    //     updateLineTitle("box-station", lineNumber, from, to);
    //     renderStations("box-station", passedStations);

    //     console.log({
    //         line: lineNumber,
    //         stationsCount,
    //         price
    //     });

    //     return;
    //     }
    // }

    // alert("المحطتين مش على نفس الخط ❌");
    // });




















    /* ================== CONFIG ================== */
const METRO_CONFIG = {
    lines: {
        1: { boxId: "box-1", waitTime: 3 },
        2: { boxId: "box-2", waitTime: 3 },
        3: { boxId: "box-3", waitTime: 5 }
    },

    ticketPrices: [
        { max: 9, price: 8 },
        { max: 16, price: 10 },
        { max: 23, price: 15 },
        { max: 39, price: 20 }
    ],

    timePerStation: 2
};

/* ================== HELPERS ================== */

// جلب المحطات من blaces فقط
function getStationsFromBox(boxId) {
    const box = document.getElementById(boxId);
    const stations = [...box.querySelectorAll(".blaces h2")];

    return stations.map(h2 => ({
        name: h2.childNodes[0].textContent.trim(),
        index: Number(h2.querySelector("span").textContent)
    }));
}

// البحث عن محطة
function findStation(stations, name) {
    return stations.find(s => s.name === name);
}

// حساب سعر التذكرة
function calculatePrice(count) {
    return METRO_CONFIG.ticketPrices.find(p => count <= p.max).price;
}

// المحطات الممرور عليها
function getPassedStations(stations, startIndex, endIndex) {
    const from = Math.min(startIndex, endIndex);
    const to = Math.max(startIndex, endIndex);

    return stations.filter(
        s => s.index >= from && s.index <= to
    );
}

/* ================== تحديث عنوان الخط ================== */
function updateLineTitle(boxStationId, lineNumber, stations) {
    const box = document.getElementById(boxStationId);
    const title = box.querySelector(".type h2");

    // اسم الخط بالعربي
    const lineNames = {
        1: "الخط الأول",
        2: "الخط الثاني",
        3: "الخط الثالث"
    };

    // أول وآخر محطة في الخط
    const firstStation = stations[0].name;
    const lastStation = stations[stations.length - 1].name;

    const spanHTML = `
        <span>
        ${firstStation}
        <span><i class="fa-solid fa-arrow-left-long arrow"></i></span>
        ${lastStation}
        </span>
    `;

    title.innerHTML = `${lineNames[lineNumber]} ${spanHTML}`;
}

/* ================== تحديث الريلواي ================== */
function updateRailway(boxStationId, passedStations) {
    const box = document.getElementById(boxStationId);
    const railway = box.querySelector(".railway");

    // نحفظ أول span وأخر span ثابتين
    const firstSpan = `<div class="span"><i class="fa-solid fa-house-flag"></i></div>`;
    const lastSpan = `<div class="span"><i class="fa-solid fa-star"></i></div>`;

    // عدد المحطات الوسطية بين البداية والنهاية
    const middleCount = passedStations.length - 2; // نستثني أول وأخر محطة

    // نعمل html جديد للريلواي
    let html = firstSpan + "<hr>";

    for (let i = 0; i < middleCount; i++) {
        html += `<div class="span"><i class="fa-solid fa-location-crosshairs"></i></div><hr>`;
    }

    html += lastSpan; // آخر span ثابت

    railway.innerHTML = html;
}



/* ================== RENDER STATIONS ================== */
function renderStations(boxStationId, passedStations) {
    const box = document.getElementById(boxStationId);
    const blaces = box.querySelector(".blaces");

    // مسح أي عرض قديم
    blaces.innerHTML = "";

    passedStations.forEach(station => {
        const h2 = document.createElement("h2");
        h2.textContent = station.name;

        // span يتساب لوحده (مهم)
        const span = document.createElement("span");
        span.textContent = station.index;

        h2.appendChild(span);
        blaces.appendChild(h2);
    });
}

/* ================== MAIN ================== */
const startInput = document.getElementById("startStation");
const endInput = document.getElementById("endStation");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const from = startInput.value.trim();
    const to = endInput.value.trim();

    if (!from || !to) {
        alert("من فضلك اختار محطة البداية والوصول");
        return;
    }

    for (const lineNumber in METRO_CONFIG.lines) {
        const line = METRO_CONFIG.lines[lineNumber];
        const stations = getStationsFromBox(line.boxId);

        const startStation = findStation(stations, from);
        const endStation = findStation(stations, to);

        if (startStation && endStation) {
            const passedStations = getPassedStations(
                stations,
                startStation.index,
                endStation.index
            );

            const stationsCount = passedStations.length;
            const price = calculatePrice(stationsCount);

            // ⭐ عنوان الخط (أول وآخر محطة فقط)
            updateLineTitle("box-station", lineNumber, stations);

            // ⭐ عرض المحطات اللي هيعدي عليها المستخدم
            renderStations("box-station", passedStations);
            // تحديث الريلواي مع عدد المحطات اللي هيمر عليها
            updateRailway("box-station", passedStations);

            const resultDiv = document.getElementById("lines-s");
            resultDiv.style.display = "none"; // نخفيه في البداية

            // لما يضغط المستخدم ويحسب الرحلة
            resultDiv.style.display = "flex"; // يظهر بعد الحساب


            // بعد renderStations و updateRailway
            const lineP = document.getElementById("line");
            const stationsP = document.getElementById("stations");
            const timeP = document.getElementById("time");
            const priceP = document.getElementById("price");

            // اسم الخط بالعربي
            const lineNames = {
                1: "الخط الأول",
                2: "الخط الثاني",
                3: "الخط الثالث"
            };

            // عدد المحطات
            lineP.textContent = ` ${lineNames[lineNumber]}`;
            stationsP.textContent = `عدد المحطات ${passedStations.length}`;
            timeP.textContent = `زمن الرحلة ${passedStations.length * METRO_CONFIG.timePerStation} دقاءق`;
            priceP.textContent = `سعر التذكرة ${price} جنيه`;

            return;
        }
    }

    alert("المحطتين مش على نفس الخط ❌");
});





































       














































































































































// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch
// don't touch


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










// let btn = document.getElementById("btn")
let result = document.getElementById("result")
    btn.addEventListener("click", () => {
        result.style.display = "flex";
        setTimeout(() => {
            result.style.opacity = "1";
        }, 1);
    });