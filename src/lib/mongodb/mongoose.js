import mongoose from "mongoose";

let initialized = false;

export const connect = async(req,res)=>{
    mongoose.set('strictQuery',true);
    if(initialized){
        console.log('MongoDB already connected')
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:'next-estate',
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        initialized = true;
        console.log('MongoDB connected successfully')                
    } catch (error) {
        console.log('MongoDB connection error:',error)
    }
}