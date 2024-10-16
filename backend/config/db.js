import mongoose from "mongoose";

const connectDB= async ()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`Successfully connected to MongoDB: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error connecting mongoDB: ${error}`)
    
    }
}
export default connectDB;