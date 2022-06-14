const mongoose = require('mongoose');
const user = mongoose.Schema({
    usertype: { type: String, default: 'user' },
    fname: {
        type: String,
    },
    mname: {
        type: String,
    },
    lname: {
        type: String,
    },
    country: {
        type: String,
        default: "Nepal"
    },
    gender: {
        type: String,
    },
    dob: {
        day: {
            type: String
        },
        month: {
            type: String
        },
        year: {
            type: String
        }
    },

    email: {
        emailaddress: { type: String },
        emailstatus: { type: Boolean }

    },
    password: {
        type: String,
    },
    phone: {
        phoneno: { type: String, default: "" },
        phonenostatus: { type: Boolean, default: false }
    }

})
var coviduser = mongoose.model('coviduser', user);
module.exports = coviduser;