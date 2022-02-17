const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
require("../DB/DB");
const User = require("../Modal/userschema");

router.get('/', (req, res) => {
    res.send('Hello World router')
});
/***********INSERT Registration DATA USING PROMISSES ***************/
/*
router.post('/registor', (req, res) => {
    const { uname, email, phone, pass, cpass } = req.body;
    if (!uname || !email || !phone || !pass || !cpass) {
        return res.json({ "status": 0, "message": "All fields Are Required" });
    }
    User.findOne({ email: email })
        .then((user_exist) => {
            if (user_exist) {
                return res.json({ "status": 0, "message": "User Already Exiist" });
            }
            const insertData = new User({ uname, email, phone, pass, cpass });
            insertData.save().then(() => {
                return res.json({ "status": 1, "message": "User Registered Succesfully" });
            }).catch((err) => {
                return res.json({ "status": 0, "message": err });
            })

        }).catch((err) => {
            return res.json({ "status": 0, "message": err });
        })
});
*/

/***********INSERT Registration DATA USING async await  ***************/
router.post('/registor', async (req, res) => {
    const { uname, email, phone, profession, pass, cpass } = req.body;
    if (!uname || !email || !phone || !pass || !cpass) {
        return res.json({ "status": 0, "message": "All fields Are Required" });
    }

    if (pass != cpass) {
        return res.json({ "status": 0, "message": "Password And Confirm Password Should Not Matchd" });
    }

    try {
        const sel = await User.findOne({ email: email });

        if (sel) {
            return res.json({ "status": 0, "message": "User Already Exiist" });
        } else {
            const insertData = new User({ uname, email, phone, profession, pass, cpass });
            const datasaved = await insertData.save();
            if (datasaved) {
                return res.json({ "status": 1, "message": "User Registered Succesfully" });
            }
        }
    } catch (err) {
        return res.json({ "status": 0, "message": err });
    }
});


/*********** Login code ************/
router.post('/login', async (req, res) => {
    const { email, pass } = req.body;
    if (!email || !pass) {
        return res.json({ "status": 0, "message": "All fields Are Required" });
    }
    try {
        const sel = await User.findOne({ email: email });

        var passmatch = false;
        if (sel != null) {
            passmatch = await bcrypt.compare(pass, sel.pass);
            const token = await sel.getJWTtoken();
            res.cookie("token", token);
            // console.log(token);
        }
        if (passmatch) {
            return res.json({ "status": 1, "message": "User Validate" });
        } else {
            return res.json({ "status": 0, "message": "Invalide Username or Password" });
        }
    } catch (error) {
        return res.json({ "status": 0, "message": error });
    }
})

module.exports = router;