import express from "express";
const app = express();
import feedback from "./src/Routes/contact.js";
import globalErrorHandler from "./src/Middleware/globalErrorHandler.js";
import morgan from "morgan";

// Middleware setup
app.use(express.json());
if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"))
}

app.use("/api/v1/profile", )
app.use("/api/v1/profile", feedback);
app.use(globalErrorHandler);

export default app;
