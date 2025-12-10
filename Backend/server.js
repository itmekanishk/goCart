import express from "express";
import cors from 'cors';
import 'dotenv/config';
import { connect } from "mongoose";
import connectDB from "./config/mongodb.js";
import uploadOnCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoute.js";

const app=express()
const port=process.env.PORT;
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running at port : ${port}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

uploadOnCloudinary();

//middleware

app.use(express.json());
app.use(cors())

app.use('/api/user',userRouter);
app.use('/api/product',productRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>console.log('Server started on PORT :'+ port))