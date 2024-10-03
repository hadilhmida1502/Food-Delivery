import express from "express"
import { addFood, listFood, removeFood } from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = express.Router(); //using this router we can create the get methos, post, put, ...


//Image Storage Engine
//whenever we will upload one file our tome stamp will be added in the file originalname and it will be create a unique name
//and the file will be stored in the "uploads folder"

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

//middleware
const upload = multer({storage:storage})


foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood);


export default foodRouter;