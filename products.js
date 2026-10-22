const products = [
    {
        id: 1,
        name: "Interior Emulsion Paint",
        category: "Paints",
        price: 2500
    },
    {
        id: 2,
        name: "Exterior Wall Paint",
        category: "Paints",
        price: 3500
    },
    {
        id: 3,
        name: "Wall Primer",
        category: "Paints",
        price: 1200
    },
    {
        id: 4,
        name: "Enamel Paint",
        category: "Paints",
        price: 1800
    },
    {
        id: 5,
        name: "Bathroom Tap",
        category: "Sanitary",
        price: 850
    },
    {
        id: 6,
        name: "Basin Mixer",
        category: "Sanitary",
        price: 1450
    },
    {
        id: 7,
        name: "Shower Set",
        category: "Sanitary",
        price: 1200
    },
    {
        id: 8,
        name: "Wash Basin",
        category: "Sanitary",
        price: 2200
    },
    {
        id: 9,
        name: "PVC Pipe",
        category: "Hardware",
        price: 450
    },
    {
        id: 10,
        name: "Paint Roller Set",
        category: "Painting Tools",
        price: 350
    }
];

function addToCart(productId) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    const product =
        products.find(p => p.id === productId);

    const existingProduct =
        cart.find(item => item.id === productId);

    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert(product.name + " added to cart!");
}


function updateCartCount() {

    const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    const count =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );

    const cartCount =
        document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = count;
    }
}


document.addEventListener(
    "DOMContentLoaded",
    updateCartCount
);