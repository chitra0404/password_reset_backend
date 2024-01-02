//Modules and Middlewars
require('dotenv').config()
const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
const routes=require('./route/userRoute')
app.use(cors());
app.use(express.json());
app.use(routes); 


//atlas url
const url = process.env. DEV_DB_URI;

//mongodb connect
mongoose.connect(url)
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