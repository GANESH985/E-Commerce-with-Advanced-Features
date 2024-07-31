const express = require('express')
const ConnectDB = require('./config/bd')
const cors = require('cors')
require('dotenv').config();


const app = express()

ConnectDB();

app.use(cors());
app.use(express.json());



const PORT = process.env.PORT || 5001
app.listen(PORT, ()=>
    console.log(`Server is running on port ${PORT}`)
)