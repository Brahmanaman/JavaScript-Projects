const wines = [
    { name: 'Pepper Jack', price: 25, img: 'https://imgs.search.brave.com/9uRAmNd3r2ahLoo4kUU1gSJPT7UhlkeGUALb4bbo_do/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93aW5l/c2VsbGVyc2RpcmVj/dC5jb20uYXUvY2Ru/L3Nob3AvZmlsZXMv/cGVwcGVyamFjay1t/ZW5kb3phLWFyZ2Vu/dGluYS1tYWxiZWMt/MjAyMy5qcGc_dj0x/NzUzNDA3Mjg0Jndp/ZHRoPTUzMw', quantity: 1 },
    { name: "Devil's Corner", price: 25, img: 'https://imgs.search.brave.com/trrNzCZddAG1D5hMiPVQWprQoCi2bHAsYjSTD69VgZs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlYm90dGxlY2x1/Yi5jb20vY2RuL3No/b3AvZmlsZXMvZGV2/aWwtcy1jb3JuZXIt/cmllc2xpbmctNzUt/Y2wtd2hpdGUtd2lu/ZS0yODM4MzU2OTcw/NzEyMy5wbmc_dj0x/NzAzNjU5NzExJndp/ZHRoPTEwODA', quantity: 1 },
    { name: 'Riverside Landing', price: 4, img: 'https://imgs.search.brave.com/xWzs73uc-68neRhS4AVG71EYHyaaLAiW7Lx7I-NyUXY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMud29vbHdvcnRo/cy5jb20uYXUvaW1h/Z2VzLzEwMDUvODI2/NjYwLmpwZz9pbXBv/bGljeT13b3dzbWtx/aWVtYSZ3PTYwMCZo/PTYwMA ', quantity: 1 },
    { name: 'McGuigan', price: 29, img: 'https://imgs.search.brave.com/3dywXEQ6UmgASsS9x6LlZG9bQZISiomprLvCehWqZIc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc2FpbnNidXJ5/cy1ncm9jZXJpZXMu/Y28udWsvZ29sLzc4/ODU1MDcvMS82NDB4/NjQwLmpwZw', quantity: 1 },
    { name: 'Marking Time', price: 20, img: 'https://imgs.search.brave.com/ouXqMCPT3ycLCTnVRxVytUjiZbntHNSJQV1RawaijlQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDc2/NzY5MTAzL3Bob3Rv/L3dpbmUtZ2xhc3Mu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW5kcVV2MWJhSGky/dFQxal96cDZpUW4w/c01leDNGVGZhNTYz/MWE1QVNZRTA9', quantity: 1 },
    { name: 'Gemtree', price: 20, img: 'https://imgs.search.brave.com/7IwRZuqBIpRVkVR4mXKDFcSaZXmphvX06yX_Ic8IlZo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/eW91cndpbmVzLmNv/bS5hdS9jZG4vc2hv/cC9maWxlcy9HZW10/cmVlTHVuYVRlbXBy/YW5hVGVtcHJhbmls/bG8tbm9iYWNrZ3Jv/dW5kXzNlMTI3MTU2/LTRmMDctNDI1YS04/OWM0LTg2Y2I4MDBi/NjgwMS53ZWJwP3Y9/MTcxODg2NTEwNiZ3/aWR0aD00NjA', quantity: 1 },
];


const grid = document.getElementById('productsGrid');
const cartCount = document.getElementById('cartCount');
const cartBtn = document.getElementById('cartBtn');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
let count = 0;

let cart = [];

wines.forEach((wine, i) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `<div class="product-img-wrap">
      <img src="${wine.img}" alt="${wine.name}">
    </div>
    <div class="product-name">${wine.name}</div>
    <div class="product-price">$${wine.price}</div>
    <button class="add-btn" data-index="${i}">Add to Bag</button>
  `;
    grid.appendChild(card);
})


document.addEventListener('click', function (event) {
    if (event.target.classList.contains("add-btn")) {
        const idx = event.target.getAttribute("data-index")
        addtoCart(wines[idx]);
    }
})

function addtoCart(wine) {
    let isExist = cart.find(c => c.name == wine.name)
    if (isExist) {
        cart.find(c => c.name == wine.name).quantity++;
    }
    else {
        cart.push({ ...wine })
    }
    updateCartUI();
}

function updateCartUI() {
    cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0)

    if (cart.length === 0) {
        cartEmpty.style.display = "flex";
        cartItems.innerHTML = "";
        cartCount.style.opacity = 0;
        cartCount.style.transform = "scale(0)"
        return;
    }

    cartCount.style.opacity = 1;
    cartCount.style.transform = "scale(1)";
    cartEmpty.style.display = "none";
    cartItems.innerHTML = "";

    cart.forEach((wine, idx) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `<div class="cart-item-image">
                                <img src=${wine.img}
                                    alt="">
                            </div>
                            <div class="cart-item-des">
                                <h5>${wine.name}</h5>
                                <div class="detail">
                                    <p>${wine.quantity}</p>
                                    <p>$ ${wine.quantity * wine.price}</p>
                                </div>
                                <button class="delete-btn" data-index="${idx}">Delete</button>
                            </div>`;
        cartItems.appendChild(div);
    })
}

document.addEventListener('click', function (event) {
    if (event.target.classList.contains("delete-btn")) {
        const idx = event.target.getAttribute("data-index")
        removetoCart(cart[idx]);
    }
})

function removetoCart(item) {
    debugger
    cart = cart.filter((x) => x.name != item.name)
    updateCartUI();
}