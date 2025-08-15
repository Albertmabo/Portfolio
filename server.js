const dotenv = require("dotenv");

// Loading environment sepcific config

if(process.env.NODE_ENV === 'production'){
    dotenv.config({path:'.env.production'});
}else{
    dotenv.config({path:'.env.development'});
}


const app = require("./app");

const PORT = process.env.PORT || 3001;

const start = () =>{
    try {
        app.listen(PORT, ()=>{
            console.log(`Server is running at PORT ${PORT}`);
            console.log(`Running on ${process.env.NODE_ENV}`);
            
            
        })
    } catch (error) {
        console.error(errror);
        
    }
}

start();