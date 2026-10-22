function loadCheckout() {
    const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    const itemsContainer =
        document.getElementById("checkout-items");

    const totalElement =
        document.getElementById("checkout-total");

    if (cart.length === 0) {
        itemsContainer.innerHTML =
            "<p>Your cart is empty.</p>";
        return;
    }

    let total = 0;
    let html = "";

    cart.forEach(item => {
        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;

        html += `
            <div class="checkout-item">
                <span>
                    ${item.name}
                    × ${item.quantity}
                </span>

                <strong>
                    ₹${itemTotal}
                </strong>
            </div>
        `;
    });

    itemsContainer.innerHTML = html;
    totalElement.textContent = total;
}


document
    .getElementById("checkout-form")
    .addEventListener("submit", async function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const phone =
            document.getElementById("phone").value;

        const address =
            document.getElementById("address").value;

        const city =
            document.getElementById("city").value;

        const pincode =
            document.getElementById("pincode").value;

        const cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        const order = {
            customer: {
                name: name,
                phone: phone,
                address: address,
                city: city,
                pincode: pincode
            },

            products: cart,

            paymentMethod: "Cash on Delivery",

            status: "Pending"
        };

        try {

            const response = await fetch(
                "http://localhost:5000/api/orders",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(order)
                }
            );

            const data = await response.json();

            if (response.ok) {

                console.log("Order saved:", data);

                localStorage.setItem(
                    "lastOrder",
                    JSON.stringify(data.order)
                );

                localStorage.removeItem("cart");

                window.location.href =
                    "order-success.html";

            } else {

                alert(
                    "Failed to place order: " +
                    data.message
                );
            }

        } catch (error) {

            console.error(
                "Order submission error:",
                error
            );

            alert(
                "Unable to connect to the server."
            );
        }
    });


loadCheckout();