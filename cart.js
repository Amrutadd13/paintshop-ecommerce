function displayCart() {

    const cartContainer =
        document.getElementById("cart-container");

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];


    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <div class="empty-cart">

                <h2>Your cart is empty 🛒</h2>

                <p>
                    Add some products to your cart.
                </p>

                <a href="products.html">
                    Continue Shopping
                </a>

            </div>
        `;

        return;
    }


    let total = 0;

    let html = "";


    cart.forEach((item, index) => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        html += `

            <div class="cart-item">

                <div>

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        ₹${item.price}
                    </p>

                </div>


                <div class="quantity">

                    <button onclick="decreaseQuantity(${index})">
                        -
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button onclick="increaseQuantity(${index})">
                        +
                    </button>

                </div>


                <div>

                    <strong>
                        ₹${itemTotal}
                    </strong>

                </div>


                <button
                    class="remove-button"
                    onclick="removeItem(${index})">

                    Remove

                </button>

            </div>

        `;

    });


    html += `

        <div class="cart-summary">

            <h2>
                Total: ₹${total}
            </h2>

            <button
                class="checkout-button"
                onclick="goToCheckout()">

                Proceed to Checkout

            </button>

        </div>

    `;


    cartContainer.innerHTML = html;
}



function increaseQuantity(index) {

    let cart =
        JSON.parse(localStorage.getItem("cart"));

    cart[index].quantity += 1;

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}



function decreaseQuantity(index) {

    let cart =
        JSON.parse(localStorage.getItem("cart"));

    if (cart[index].quantity > 1) {

        cart[index].quantity -= 1;

    } else {

        cart.splice(index, 1);

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}



function removeItem(index) {

    let cart =
        JSON.parse(localStorage.getItem("cart"));

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}



function goToCheckout() {

    window.location.href =
        "checkout.html";

}


displayCart();