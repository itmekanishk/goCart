import express from "express";
import cors from 'cors';
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import uploadOnCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js"
import orderRoter from "./routes/orderRoute.js"

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRoter);

app.get('/', (req, res) => {
    res.send("API Working");
});

// Database connection
connectDB()
    .then(() => {
        console.log("MongoDB connected successfully");
        uploadOnCloudinary();
        
        
        if (process.env.NODE_ENV !== "production") {
            app.listen(port, () => {
                console.log(`Server is running on port ${port}`);
            });
        }
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    });


export default app;

