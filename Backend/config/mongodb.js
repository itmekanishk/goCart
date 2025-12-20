import mongoose from "mongoose";


let cachedConnection = null;

const connectDB = async () => {
    
    if (cachedConnection && mongoose.connection.readyState === 1) {
        return cachedConnection;
    }

    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/e-commerce`,
            {
                
                serverSelectionTimeoutMS: 5000,
                socketTimeoutMS: 45000,
            }
        )
        
        cachedConnection = connectionInstance; 
        
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        
        throw error;
    }
}

export default connectDB