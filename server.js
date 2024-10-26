const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const Weather=require('./routes/weather');


const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use(Weather);

const uri='mongodb://localhost:27017/data';
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connected!");
    })
    .catch((err) => {
        console.log(err);
    });


const PORT = 8084;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));