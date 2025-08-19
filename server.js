
import dotenv from "dotenv"
import connectDB from "./src/db/connect.js"


// Loading environment sepcific config

if(process.env.NODE_ENV === 'production'){
    dotenv.config({path:'.env.production'});
}else{
    dotenv.config({path:'.env.development'});
}


import app from "./app.js"

const PORT = process.env.PORT || 3001;

const start = async() =>{
    try {
        await connectDB(process.env.URl)
        app.listen(PORT, ()=>{
            console.log(`Server is running at PORT ${PORT}`);
            console.log(`Running on ${process.env.NODE_ENV}`);
            
            
        })
    } catch (error) {
        console.error("Error stating sever:", error);
        
    }
}

start();