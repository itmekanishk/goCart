import express from "express";
import cors from 'cors';
import 'dotenv/config';
import { connect } from "mongoose";
import connectDB from "./config/mongodb.js";
import uploadOnCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js"
import orderRoter from "./routes/orderRoute.js"

const app=express()
const port=process.env.PORT;
connectDB()
.then(() => {
    if (process.env.NODE_ENV !== "production") {
       app.listen(process.env.PORT || 4000, () => {
       console.log(`Server is running on port ${process.env.PORT || 4000}`);
    });
}
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

if (process.env.CLOUDINARY_URL) {
  uploadOnCloudinary();
}


//middleware

app.use(express.json());
// middleware
app.use(express.json());

app.use(cors())


app.use('/api/user',userRouter);
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter )
app.use('/api/order',orderRoter)

app.get('/',(req,res)=>{
    res.send("API Working")
})

export default app;

