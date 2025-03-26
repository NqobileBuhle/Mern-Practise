import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from './routes/userRoutes.js'
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";


dotenv.config();





const app=express();
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