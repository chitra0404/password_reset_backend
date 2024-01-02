//Modules and Middlewars

const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
const routes=require('./route/userRoute')
app.use(cors());
app.use(express.json());
app.use(routes); 
require('dotenv').config()

// url
const url = process.env.ATLAS_URL;
mongoose.connect(url, {useNewUrlParser: "true",
useUnifiedTopology: "true"})
    .then(() => {
        console.log("connected to  mongodb");
    })
    .catch(err => {
        console.error(err);
    })
    
const PORT=8080;
app.listen(PORT,()=>{
    console.log(`Server connected to PORT ${PORT}`);
})