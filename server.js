import Express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import formController from "./formController/formControl.js"
import formRoute from "./route/formRoute.js"
import { fileURLToPath } from "url";


// __Firname __dirname 
const __filename =  fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

//Envirioment varibles 
dotenv.config({path:'./config/.env'})

//Express setup
const app = Express();

//Cors setup
app.use(cors({
    origin:(origin,callback) => callback(null,true),
    credentials: true
}));

// Static folder || React files
app.use(Express.static("frontend/build"));

//Setup routes
app.use('/api/form', formRoute)

app.use('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});



app.listen(process.env.PORT, ()=>{
    console.log("Server is running, you better catch it")
});