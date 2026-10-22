const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
    res.send("Paint Shop E-Commerce Server is Running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});