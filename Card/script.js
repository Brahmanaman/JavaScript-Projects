var cars = [
    {
        "carName": "Mahindra XUV700",
        "carType": "SUV",
        "carColor": [
            { "name": "Everest White", "hex": "#F2F3F4" },
            { "name": "Midnight Black", "hex": "#080808" },
            { "name": "Electric Blue", "hex": "#003399" },
            { "name": "Red Rage", "hex": "#8B0000" }
        ],
        "parentCompany": "Mahindra & Mahindra",
        "Engine": "2.0L mStallion Turbo Petrol / 2.2L mHawk Diesel",
        "price": "₹13.99 - 26.99 Lakh",
        "pros": [
            "Class-leading performance engines",
            "Futuristic dual-screen dashboard",
            "Sony 12-speaker premium audio system",
            "Smooth 6-speed torque converter auto",
            "High safety tech and AWD option"
        ],
        "cons": [
            "Long waiting periods in some cities",
            "Boot space with all 7 seats up is nil",
            "Petrol engine is quite thirsty",
            "Occasional software glitches",
            "Ride is slightly firm on low speeds"
        ],
        "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-3.jpeg",
        "mileage": "13.0 - 17.0 kmpl",
        "available": false
    },
    {
        "carName": "Hyundai Creta",
        "carType": "Mid-size SUV",
        "carColor": [
            { "name": "Abyss Black", "hex": "#121212" },
            { "name": "Robust Emerald", "hex": "#004225" },
            { "name": "Atlas White", "hex": "#FFFFFF" },
            { "name": "Fiery Red", "hex": "#B22222" }
        ],
        "parentCompany": "Hyundai India",
        "Engine": "1.5L MPi Petrol / 1.5L CRDi Diesel / 1.5L Turbo GDi",
        "price": "₹10.99 - 20.15 Lakh",
        "pros": [
            "Vast feature list (Ventilated seats, Panoramic Sunroof)",
            "Refined and quiet engines",
            "Strong resale value in India",
            "Wide service network reach",
            "Comfortable suspension for city drives"
        ],
        "cons": [
            "Polarizing front-end design for some",
            "Safety rating is lower than some rivals",
            "Turbo variant is expensive",
            "Rear seat is best for two adults only",
            "Light steering lacks feedback on highways"
        ],
        "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/141115/creta-exterior-right-front-three-quarter-16.jpeg",
        "mileage": "17.4 - 21.8 kmpl",
        "available": true
    },
    {
        "carName": "Toyota Innova Hycross",
        "carType": "MPV",
        "carColor": [
            { "name": "Blackish Ageha", "hex": "#1C2841" },
            { "name": "Platinum White", "hex": "#E5E4E2" },
            { "name": "Attitude Black", "hex": "#000000" },
            { "name": "Silver Metallic", "hex": "#C0C0C0" }
        ],
        "parentCompany": "Toyota India",
        "Engine": "2.0L VVTi Hybrid",
        "price": "₹19.77 - 30.98 Lakh",
        "pros": [
            "Legendary Toyota reliability",
            "Extreme comfort with Ottoman seats",
            "Incredible fuel efficiency for a large car",
            "Light steering, easy to drive",
            "Huge cabin space"
        ],
        "cons": [
            "Very long waiting periods",
            "No Manual transmission option",
            "Interior quality doesn't match the 30L price",
            "Missing a spare wheel in some trims",
            "Thin tires for the car's bulk"
        ],
        "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/115025/innova-hycross-exterior-right-front-three-quarter-73.jpeg",
        "mileage": "23.24 kmpl",
        "available": true
    },
    {
        "carName": "MG Hector",
        "carType": "SUV",
        "carColor": [
            { "name": "Dune Brown", "hex": "#5D4037" },
            { "name": "Havana Grey", "hex": "#4F4F4F" },
            { "name": "Candy White", "hex": "#FFFFFF" },
            { "name": "Glaze Red", "hex": "#D32F2F" }
        ],
        "parentCompany": "MG Motor India",
        "Engine": "1.5L Turbo Petrol / 2.0L Diesel",
        "price": "₹13.99 - 22.24 Lakh",
        "pros": [
            "Massive 14-inch touchscreen",
            "Soft, plush ride quality",
            "Best-in-class rear legroom",
            "Panoramic sunroof is huge",
            "Premium 'Internet Inside' features"
        ],
        "cons": [
            "Petrol CVT is very fuel-thirsty",
            "Handling is soft, lots of body roll",
            "Touchscreen is prone to fingerprint smudges",
            "Diesel lacks an Automatic option",
            "Design might be too 'blingy' for some"
        ],
        "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/130583/hector-exterior-right-front-three-quarter-75.jpeg",
        "mileage": "12.0 - 15.5 kmpl",
        "available": true
    },
]

let idx = 0;
var startX = 0;
var endX = 0;

function loadCard() {
    let car = cars[idx];
    const card = `<div id="card" class="container">
        <div class="top">
            <img src=${car.image}
                alt="">
        </div>
        <div class="bottom">
            <div class="modeDetail">
                <div class="model">
                    <h1 class="carName">${car.carName}</h1><span class="carType">${car.carType}</span>
                </div>
                <h4 class="parentCompany">${car.parentCompany}</h4>
            </div>
            <div class="engine_mileage">
                <h5 class="engine">
                    Engine: ${car.Engine}
                </h5>
                <h5 class="mileage">
                    Mileage: ${car.mileage}
                </h5>
            </div>
            <div class="colors">
                ${car.carColor
            .map(carColor => `<span style="background-color: ${carColor.hex};"></span>`)
            .join('')}
            </div>
            <div class="pros_cons">
                <div class="pros">
                    <h5>Pros</h5>
                    <ul>
                    ${car.pros.map((item) => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="cons">
                    <h5>Cons</h5>
                    <ul>
                       ${car.cons.map((item) => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="cons"></div>
            </div>
        </div>
    </div>`;

    document.body.innerHTML = card;
    swipe();
}


function swipe() {
    let card = document.querySelector("#card");

    card.addEventListener("touchstart", (event) => {
        startX = event.touches[0].clientX;
    });

    card.addEventListener("touchend", (event) => {
        endX = event.changedTouches[0].clientX;
        slideImage()
    });

    card.addEventListener("mousedown", function (event) {
        startX = event.clientX;
    })

    card.addEventListener("mouseup", function (event) {
        endX = event.clientX;
        slideImage()
    })
}

function slideImage() {
    if (startX - endX > 10) {
        if (idx < cars.length - 1) {
            idx++;
        }
        else {
            idx = cars.length - 1;
        }

        loadCard();
    }
    else if (endX - startX > 10) {
        if (idx > 0) {
            idx--;
        }
        else {
            idx = 0
        }

        loadCard();
    }
}

loadCard()
