import mongoose from "mongoose";

const connectDB = async(url) =>{
    try{
        const connect = await mongoose.connect(url);
        console.log(`Mongo DB connected | ${connect.connection.host} | ${connect.connection.name}`)



    }catch{
        console.error('There was error while connecting to the Mongo DB Atlas');
        

    }
}

export default connectDB;