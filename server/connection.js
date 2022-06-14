const con = () => {

    const express = require('express');
    const app = express();
    const mongoose = require('mongoose')
    const cors = require('cors')
    app.use(cors())
    const bodyParser = require('body-parser')
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(express.json())
    const con = process.env.DBCONNECT;
    try {
        mongoose.connect(con).then(() => console.log('Connected Sucessfully')).catch(err => console.log("error in connection "))

    } catch (error) {
        console.log("error in connection ")

    }

}

module.exports = { con };