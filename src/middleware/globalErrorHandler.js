

// dev Error
const devErrors = (res, error) =>{
    console.log("Hit");
    
    res.status(error.statusCode).json({
        status: error.status,
        statusCode: error.statusCode,
        message: error.message,
        stackTrace : error.stack,
        error:error,

    })
}


// Prod Error
const prodError = (res, error) =>{
    console.log("Hit");
    
    res.status(error.statusCode).json({
        status: error.status,
        message: error.message
    })
}

const globalErrorHandler  = (error,req,res,next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || "error";

    if(process.env.NODE_ENV === "development"){
        devErrors(res, error);
    }
    else if(process.env.NODE_ENV === "production"){
        prodError(res,error)
    }
}

export default globalErrorHandler;

