//Modules and Middlewars
const dotenv=require('dotenv');
const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
const routes=require('./route/userRoute')
app.use(cors());
app.use(express.json());
app.use(routes); 
dotenv.config();

// url
if (!process.env.ATLAS_URL) {
    console.error("ATLAS_URL is not defined in the .env file");
    process.exit(1);
  }
  
  const url = process.env.ATLAS_URL;
  console.log("URL:", url);
mongoose.connect(url, {useNewUrlParser: "true",
useUnifiedTopology: "true"})
    .then(() => {
        console.log("connected to  mongodb");
    })
    .catch(err => {
        console.error(err);
    })
    
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Server connected to PORT ${port}`);
})