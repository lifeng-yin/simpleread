const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
const User = require("../models/user")
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
// authentication imports
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
require("dotenv").config({ path: "../config.env" });
 
// This section will help you create a new record.
recordRoutes.route("/user/register").post(async function (req, response) {
 const user = req.body
 
 // check whether user already exists
 if (await User.findOne({username: user.username})) {
     response.json({message: "Username already exists"})
 } else if (await User.findOne({email: user.email})){
     response.json({message: "Email already exists"})
 } else {
     user.password = await bcrypt.hash(req.body.password, saltRounds)
 
    const dbUser = new User({
        username: user.username,
        email: user.email.toLowerCase(),
        password: user.password
    })
    
    dbUser.save()
    console.log("1 user added")
    response.json({message: "Success"})
    }
});
 
function generateJWT(payload, callback) {
    jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {expiresIn: 24 * 60 * 60 * 1000},
        callback
    )
}
 
recordRoutes.route("/user/login").post((req, res) => {
    const loginCreds = req.body
    
    User.findOne({$or: [{username: loginCreds.username}, {email: loginCreds.email}]})
    .then(dbUser => {
        if (!dbUser) {
            return res.json({message: "Invalid credentials"})
        }
        bcrypt.compare(loginCreds.password, dbUser.password)
        .then(correctEh => {
            if (correctEh) {
                generateJWT(
                    {
                        id: dbUser._id,
                        username: dbUser.username
                    },
                    (err, token) => {
                        if (err) return res.json({message: err})
                        return res.json({
                            message: "Success",
                            token: "Bearer" + token
                        })
                    }
                )
            } else {
                return res.json({
                    message: "Invalid credentials"
                })
            }
        })
    })
})

function verifyJWT(req, res, next) {
    //get the token (and remove the "Bearer: " part)
    const token = req.headers["x-access-token"]?.split(" ")[1]
    
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return res.json({
                isLoggedIn: false,
                message: "Failed to authenticate"
            })
            req.user = {}
            req.user.id = decoded.id
            req.user.username = decoded.username
            next()
        })
    } else {
        res.json({message: "Incorrect token given", isLoggedIn: false})
    }
}

recordRoutes.route("/user/getUsername").get(verifyJWT, (req, res) => {
    res.json({isLoggedIn: true, username: req.user.username})
})

module.exports = recordRoutes;
