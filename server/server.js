import  express  from "express";
import mongoose from 'mongoose';
import cors  from 'cors'
import bodyParser from "body-parser";
const PORT = 4000;
const  app = express();
app.use(cors())
app.use(bodyParser.json())
// / instead of then you can use await 
await mongoose.connect("mongodb+srv://anurag_premaverma:anurag.prema@cluster1.85y2dfr.mongodb.net/test")
console.log("MongoDB connection is successfull")

// .then(()=>console.log("Mongo is running successfull"))
// .catch((err)=>{
//     console.error(err)
// })

app.get("/", (req, res)=>{
    res.send("Hello world");
})

app.post("/transaction", (req, res)=>{
    const {amount, description, date} = req.body;
    res.json({message: "hello world"});
})


app.listen(PORT, ()=>{
    console.error(`server is running on ${PORT}`)
})