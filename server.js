import { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mainRoute from "./routes/mainRoutes";

//Envirioment varibles 
dotenv.config({path:'./config/.env'})

//Express setup
const app =  Express();

//Cors setup
app.use(cors({
    origin:(origin,callback) => callback(null,true),
    credentials: true
}));

// Static folder || React files
app.use(express.static("frondend"));

//Setup routes
app.use("/", mainRoute);


app.listen(process.env.PORT, ()=>{
    console.log("Server is running, you better catch it")
});