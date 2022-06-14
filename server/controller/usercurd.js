const jwt = require('jsonwebtoken')
const coviduser = require('../models/user')

module.exports = {
    signin: async(req, res) => {
        try {
            await coviduser.findOne({
                $and: [

                    {
                        "email.emailaddress": req.body.signindata.emailaddress
                    }, {
                        password: req.body.signindata.password
                    }

                ]
            }).exec((err, user) => {
                if (err) {
                    res.status(500).send({
                        message: "err"
                    });
                    return;
                }
                if (user) {
                    const secret_key = process.env.SECRET_KEY;
                    const token = jwt.sign({
                        username: user.email.emailaddress,
                        password: user.password
                    }, secret_key, {
                        algorithm: "HS256",
                        expiresIn: '15min',
                    })

                    res.status(200).json({
                        success: true,
                        token
                    })
                    return;
                } else {
                    res.status(500).send({
                        message: "unsucess"
                    });
                    return;

                }

            })

        } catch (error) {
            console.log("Error in signin")

        }


    },

    verify: async(req, res, next) => {
        try {

            const decoded = jwt.verify(req.headers.token, process.env.SECRET_KEY)
            if (decoded) {

                const user = await coviduser.findOne({
                    $and: [

                        {
                            "email.emailaddress": decoded.username
                        }, {
                            password: decoded.password
                        }

                    ]
                });
                if (user) {
                    const profiledata = {
                        fname: user.fname,
                        mname: user.mname,
                        lname: user.lname,
                        country: user.country,
                        gender: user.gender,
                        dob: {
                            day: user.dob.day,
                            month: user.dob.month,
                            year: user.dob.year
                        }

                    }
                    return res.status(200).json({
                        profiledata
                    });
                }
            }
        } catch (error) {
            return res.status(404).json({
                message: error.message
            });
        }
        next()
    },
    usercheck: async(req, res, next) => {
        try {


            const user = await coviduser.findOne({
                "email.emailaddress": req.body.formdata.email.emailaddress
            });

            if (!user) {
                res.status(200).send({
                    message: 'Success'
                });
            } else {

                res.status(404).json({
                    message: "user exists"
                });
            }
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
        next()
    },
    get: async(req, res) => {
        try {
            const decoded = jwt.verify(req.session.token, process.env.SECRET_KEY)


            const user = await coviduser.findOne({
                $and: [

                    {
                        "email.emailaddress": decoded.username
                    }, {
                        password: decoded.password
                    }

                ]
            });


            if (user) {
                res.status(200).send({
                    user
                });
            } else {

                res.status(404).json({
                    message: "user found"
                });
            }
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }

    },

    create: (req, res) => {

        try {
            const newcoviduser = new coviduser({
                fname: req.body.formdata.fname,
                mname: req.body.formdata.mname,
                lname: req.body.formdata.lname,
                country: req.body.formdata.country,
                gender: req.body.formdata.gender,
                dob: {
                    day: req.body.formdata.dob.day,
                    month: req.body.formdata.dob.month,
                    year: req.body.formdata.dob.year
                },


                email: {
                    emailaddress: req.body.formdata.email.emailaddress,
                    emailstatus: req.body.formdata.email.emailstatus
                },
                password: req.body.formdata.password,
                phone: {
                    phoneno: req.body.formdata.phone.phoneno,
                    phonenostatus: req.body.formdata.phone.phonenostatus
                },

            })
            newcoviduser.save();
            res.status(201).json(newcoviduser);

        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }


    },
    changepassword: async(req, res) => {
        try {
            const decoded = jwt.verify(req.body.headers.token, process.env.SECRET_KEY)

            await coviduser.findOneAndUpdate({
                $and: [

                    {
                        "email.emailaddress": decoded.username
                    }, {
                        password: decoded.password
                    }

                ]
            }, {
                password: req.body.updatedata.confirmpassword
            }).exec((err, response) => {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                    return;
                }
                if (response) {
                    res.status(200).send({
                        message: "Sucessfully processed"
                    });
                    return;
                } else {
                    res.status(500).send({
                        message: err
                    });
                    return;
                }

            });

        } catch (error) {
            console.log(error)
        }
    },

    update: async(req, res) => {

        try {
            const user = await coviduser.findOneAndUpdate({
                $and: [

                    {
                        "email.emailaddress": req.body.profiledata.username
                    }, {
                        password: req.body.profiledata.password
                    }

                ]
            }, {
                fname: req.body.profiledata.fname,
                mname: req.body.profiledata.mname,
                lname: req.body.profiledata.lname,
                country: req.body.profiledata.country,
                gender: req.body.profiledata.gender,
                "dob.day": req.body.profiledata.dob.day,
                "dob.month": req.body.profiledata.dob.month,
                "dob.year": req.body.profiledata.dob.year

            }, {
                new: true
            })
            if (user) {
                res.status(200).send({
                    Userdata: req.body.profiledata
                });
            }


        } catch (error) {
            res.status(401).json({
                message: error.message
            });
        }

    },
    delete: async(req, res) => {

        try {
            await coviduser.findOneAndRemove({
                $and: [

                    {
                        "email.emailaddress": req.body.profiledata.username
                    }, {
                        password: req.body.profiledata.password
                    }

                ]
            });
            res.status(203).json("Sucessfully deleted");

        } catch (error) {
            res.status(402).json({
                message: error.message
            });
        }

    }
}