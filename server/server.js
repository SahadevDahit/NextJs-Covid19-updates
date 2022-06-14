const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const cors = require('cors')
var nodemailer = require('nodemailer')
var sendgridTransport = require('nodemailer-sendgrid-transport')
const AccountSID = process.env.AccountSID;
const TokenID = process.env.TokenID
const clients = require('twilio')(AccountSID, TokenID);
var app = express()
const cookieParser = require("cookie-parser");
const session = require('express-session')


app.use(cors({
    origin: '*',
    credentials: true
}))
app.use(cookieParser());
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With,  Accept"
    );
    res.setHeader('Content-Type', 'application/json')
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.use(session({
    secret: process.env.SECRET_KEY,
    stratrgy: "jwt",
    resave: false,
    saveUninitialized: true,

    cookie: {
        secure: process.env.Environment === "production" ? "true" : "auto",
        SameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        httpOnly: true
    },
    cookie: { maxAge: 50000 }

}))

const {
    con
} = require('./connection')
con()

app.use('/', require('./routes/userroute'))

const coviduser = require('./models/user')



var transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: process.env.SENDGRID_APIKEY
    }

}));


app.get('/', async(req, res) => {
    try {

        res.send("hello Welcome");
    } catch (error) {
        console.log("error getting data");
    }
})


var otparr = [];
app.post('/sendmail', (req, res) => {
    const otp = Math.floor((Math.random() * 1000000) + 1);
    otparr.push(otp);


    try {
        transporter.sendMail({
            to: `${req.body.email}`,
            from: 'dahitsahadev761@gmail.com',
            subject: 'Verification',
            text: `Your verification code is ${otp}`
        }, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                res.send(`${otp}`)
                console.log('Email sent: ');
            }
        });
    } catch (error) {
        console.log(error)
    }
})




app.post("/sendotp", (req, res) => {
    const otp = Math.floor((Math.random() * 1000000) + 1);
    try {
        clients.messages.create({
            to: `${req.body.phone}`,
            from: process.env.OTP_PHONE,
            body: `Hello your verification code is ${otp}`
        }, function(error, message) {
            if (!error) {
                res.send(`${otp}`)

                console.log('Success! The SID for this SMS message is:');

            } else {
                console.log('Oops! There was an error.');
            }

        });
    } catch (error) {
        console.log('Oops! There was an error.');

    }

})


app.post('/forgotpassword', async(req, res, ) => {
    await coviduser.findOne({
        $and: [

            {
                "email.emailaddress": req.body.email.emailaddress
            }

        ]
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({
                message: err
            });
            return;
        }
        if (user) {
            var mailOptions = {
                from: 'dahitsahadev761@gmail.com',
                to: `${req.body.email.emailaddress}`,
                subject: 'Email from covid 19 website',
                text: `Your password  is ${user.password}`
            };


            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                    res.status(500).send({
                        message: err
                    });
                    return;
                } else {
                    res.status(200).send({
                        message: "sent password"
                    });
                    return;
                }
            });
        } else {
            res.status(500).send({
                message: err
            });
            return;
        }


    })
})

app.get('*', function(req, res) {
    res.send('what??? Page Not Found', 404);
});



const port = process.env.PORT || 4000;
try {
    app.listen(port, () => {
        console.log(`listening on 4000`)
    })
} catch (error) {
    console.log("error in listening port")
}