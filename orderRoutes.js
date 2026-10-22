const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

// POST - Create a new order
router.post("/", async (req, res) => {
    try {
        const order = new Order(req.body);

        const savedOrder = await order.save();

        res.status(201).json({
            message: "Order placed successfully",
            order: savedOrder
        });

    } catch (error) {
        console.error("Order creation error:", error.message);

        res.status(500).json({
            message: "Failed to place order",
            error: error.message
        });
    }
});

module.exports = router;