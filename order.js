const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        customer: {
            name: {
                type: String,
                required: true
            },

            phone: {
                type: String,
                required: true
            },

            address: {
                type: String,
                required: true
            },

            city: {
                type: String,
                required: true
            },

            pincode: {
                type: String,
                required: true
            }
        },

        products: [
            {
                id: {
                    type: Number,
                    required: true
                },

                name: {
                    type: String,
                    required: true
                },

                price: {
                    type: Number,
                    required: true
                },

                quantity: {
                    type: Number,
                    required: true
                }
            }
        ],

        paymentMethod: {
            type: String,
            default: "Cash on Delivery"
        },

        status: {
            type: String,
            default: "Pending"
        }
    },

    {
        timestamps: true
    }
);

module.exports = mongoose.model("Order", orderSchema);