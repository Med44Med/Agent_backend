const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const authRoutes = require('./routes/authRouter')

dotenv.config()

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))


app.use('/auth',authRoutes)

  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is running on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);