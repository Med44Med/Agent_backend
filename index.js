const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const authRoute = require('./routes/authRoute')
const companiesRoute = require('./routes/companiesRoute')


dotenv.config()

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))


app.use('/auth',authRoute)
app.use('/companies',companiesRoute)
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is running on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);