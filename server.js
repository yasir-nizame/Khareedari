import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./backend/config/db.js";
import authRoutes from "./backend/views_routes/authroute.js";
import categoryRoutes from "./backend/views_routes/CategoryRoutes.js";
import productRoutes from "./backend/views_routes/productRoutes.js";
import path from "path";
import cors from "cors";
//env config
dotenv.config(); //use dotenv.config({path:"if path other then root of env file"})

//database config
connectDB();

//rest object
const app = express();

//port
const port = process.env.PORT;

//middlewares
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./frontend/build")));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// app.get("/", (req, res) => {
//   res.send(`<h1>Hello! Welcome to Ecom</h1>`);
// });

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});

app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});
