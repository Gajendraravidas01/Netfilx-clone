import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import 'dotenv/config'
import userRoute from './routes/UserRoute.js'


const app = express();
app.use(cors());
app.use(express.json())

app.use("/api/users",userRoute)

const PORT = 4500;

mongoose.connect(`${process.env.MONGO_URL}/netflix`
).then(() => {
    console.log("database connected!")
}).catch((error) => {
    console.log("error in connected with database. ", error);
})

app.listen(PORT,() => {
    console.log("port is running in port no ",PORT)
})
