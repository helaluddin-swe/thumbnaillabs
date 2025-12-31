import mongoose from "mongoose"
const connectDB=async()=>{
    try {
        mongoose.connection.on('connected',()=>console.log("Mongo connected"))
        await mongoose.connect(process.env.MONGO_URI as string)
    } catch (error) {
        console.error("error to connect db",error)
    }
}

export default connectDB