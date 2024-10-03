//this express server will be a module type server where we will use es6 feature 
import express, { response } from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

//app config
const app = express()
const port = 4000

//middleware : to get the request from front to back thet will be passed using json
app.use(express.json())
//to access to the back from any front
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads')) //to access to the uploads fils using /images/filename
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

//get is a http method ; to request the data from the server
app.get("/",(req,res)=>{
    res.send("API Working")
})

//to run the express server
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})