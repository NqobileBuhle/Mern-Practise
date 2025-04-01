import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from './routes/userRoutes.js'
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";


dotenv.config();

const app=express();


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use('/api/users',userRoutes);

app.use(notFound);
app.use(errorHandler);

app.get("/users",(req,res)=>{
  
})
const PORT=process.env.PORT|| 2000;
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server started on port  ${PORT}`);
    
});