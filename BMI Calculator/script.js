let card = document.querySelector(".card")
let bubbles = document.querySelector("#bubbles")
const heightRow = document.getElementById('heightRow');
const weightUnit = document.getElementById("weightUnit")
const btnMetric = document.getElementById("btnMetric")
const btnImperical = document.getElementById("btnImperical")
const heightcm = document.getElementById("heightcm")
const weightkg = document.getElementById("weightkg")

function createdBubbleAnimation() {
    for (let i = 0; i < 18; i++) {
        let bubble = document.createElement("div")
        bubble.classList.add("bubble");
        const size = Math.random() * 60 + 50;
        bubble.style.cssText = `width:${size}px; height:${size}px; left:${Math.random() * 100}%; animation-duration:${Math.random() * 12 + 8}s; animation-delay:${Math.random() * 10}s`;
        bubbles.appendChild(bubble);
    }
}

createdBubbleAnimation();

let unt = "metric"

function setUnit(unit) {
    unt = unit;


    if (unit == "metric") {
        btnMetric.classList.add("active")
        btnImperical.classList.remove("active")
        heightRow.innerHTML = `<div class="input-box">
                    <input type="number" id="heightcm" placeholder="70" min="1">
                    <span>cm</span>
                </div>`
        weightkg.placeholder = "50"
        weightUnit.textContent = "kg"

    }
    else if (unit == "imperical") {
        btnImperical.classList.add("active")
        btnMetric.classList.remove("active")
        heightRow.innerHTML = `
        <div class="input-box"><input type="number" id="heightFt" placeholder="5" min="1" max="8"><span>ft</span></div>
        <div class="input-box"><input type="number" id="heightIn" placeholder="10" min="0" max="11"><span>in</span></div>`;
        weightkg.placeholder = "100"
        weightUnit.textContent = "lbs"
    }
}

function calculateBMI() {
    let heightM, wtKg

    if (unt == "metric") {
        const hcm = parseFloat(heightcm.value);
        wtKg = parseFloat(weightkg.value);
        if (!hcm && !wtKg) return shake();
        heightM = hcm / 100;
    }
    else {
        debugger
        const heightFt = document.getElementById("heightFt")
        const heightIn = document.getElementById("heightIn")
        const hft = parseFloat(heightFt?.value);
        const hinch = parseFloat(heightIn?.value);
        const wlbs = parseFloat(weightkg.value);
        if (!hft && !hinch && !wlbs) {
            return shake();
        }

        heightM = (hft * 0.3048) + (hinch * 0.0254)
        wtKg = wlbs * 0.453592
    }

    const bmi = wtKg / (heightM * heightM);
    if (isNaN(bmi) || !isFinite(bmi)) return shake();

    showResult(bmi);
}

function shake() {
    card.style.animation = "none";
    void card.offsetWidth;
    card.style.animation = "shake 0.4s ease";
    card.addEventListener('animationend', () => card.style.animation = '', { once: true });
}

function showResult(bmi) {
    const result = bmi.toFixed(1)
    let category, cls, description;

    if (bmi < 18.5) {
        category = 'Underweight';
        cls = 'underweight';
        description = 'You may need to gain some weight. Consult a nutritionist for a healthy plan.';
    }
    else if (bmi < 25) {
        category = 'Normal Weight';
        cls = 'normal';
        description = 'Great job! You\'re in the healthy weight range. Keep up your balanced lifestyle.';
    }
    else if (bmi < 30) {
        category = 'Overweight';
        cls = 'overweight';
        description = 'Slightly above the healthy range. A balanced diet & exercise can help.';
    }
    else {
        category = 'Obese';
        cls = 'obese';
        description = 'Consider consulting a healthcare provider for a personalised weight loss plan.';
    }


    ///value mapping

    document.getElementById("bmiValue").textContent = result;
    document.getElementById("bmiLabel").textContent = category;
    document.getElementById("bmiDesc").textContent = description;

    const inner = document.getElementById('resultInner');
    inner.className = 'result-inner ' + cls;

    document.getElementById("result").classList.add("show")


    const res = document.getElementById('result');
    res.classList.remove('show');
    void res.offsetWidth;
    res.classList.add('show');


}
