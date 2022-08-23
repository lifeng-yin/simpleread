const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const User = require("../models/user");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// authentication imports
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
require("dotenv").config({ path: "../config.env" });

// This section will help you create a new record.
recordRoutes.route("/user/register").post(async function (req, response) {
  const user = req.body;

  // check whether user already exists
  if (await User.findOne({ username: user.username })) {
    response.json({ message: "Username already exists" });
  } else if (await User.findOne({ email: user.email })) {
    response.json({ message: "Email already exists" });
  } else {
    user.password = await bcrypt.hash(req.body.password, saltRounds);

    const dbUser = new User({
      username: user.username,
      email: user.email.toLowerCase(),
      password: user.password,
    });

    dbUser.save();
    console.log("1 user added");
    response.json({ message: "Success" });
  }
});

function generateJWT(
  payload,
  options = { expiresIn: 15 * 60 * 1000 },
  secret = process.env.JWT_SECRET
) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, options, (err, token) => {
      if (err) reject(err);
      else resolve(token);
    });
  });
}

recordRoutes.route("/user/login").post((req, res) => {
  const loginCreds = req.body;

  // try to find user
  User.findOne({
    $or: [{ username: loginCreds.username }, { email: loginCreds.username }],
  }).then((dbUser) => {
    // yell at them if user doesn't exist (wrong username/email)
    if (!dbUser) {
      return res.json({ message: "Invalid credentials" });
    }
    // compare encrypted password to password given
    bcrypt
      .compare(loginCreds.password, dbUser.password)
      .then(async (correctEh) => {
        // do they match?
        if (correctEh) {
          // generate access token to access api stuff
          let accessToken = await generateJWT({
            id: dbUser._id,
            username: dbUser.username,
          });

          // generate refresh token to refresh access token when it expires
          let refreshToken = await generateJWT(
            {
              id: dbUser._id,
              username: dbUser.username,
            },
            (options = { expiresIn: 7 * 24 * 60 * 60 * 1000 }),
            (secret = process.env.REFRESH_SECRET)
          );
          // put refresh token in httpOnly cookie and return access token to put into memory

          res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL);
          res.setHeader("Access-Control-Allow-Credentials", true);
          res.setHeader(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
          );
          res.cookie("refreshToken", refreshToken, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
          });
          res.json({
            message: "Success",
            token: "Bearer " + accessToken,
            isLoggedIn: true,
          });
          //   console.log(res);
          return res;
        }
        // passwords do not match
        else {
          return res.json({
            message: "Invalid credentials",
          });
        }
      });
  });
});

function verifyJWT(
  req,
  res,
  next,
  tokenParam = undefined,
  secret = process.env.JWT_SECRET
) {
  //get the token (and remove the "Bearer: " part)
  const token = tokenParam || req.headers["x-access-token"]?.split(" ")[1];

  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err)
        return res.json({
          isLoggedIn: false,
          message: "Failed to authenticate",
        });
      req.user = {};
      req.user.id = decoded.id;
      req.user.username = decoded.username;
      next();
    });
  } else {
    res.json({ message: "Incorrect token given", isLoggedIn: false });
  }
}

// checks refresh token validity then generates new access token
recordRoutes.route("/user/getToken").get(
  (req, res, next) => {
    verifyJWT(
      req,
      res,
      next,
      req.cookies?.refreshToken,
      process.env.REFRESH_SECRET
    );
  },
  async (req, res) => {
    let accessToken = await generateJWT({
      id: req.user.id,
      username: req.user.username,
    });
    res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL);
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.json({
      message: "Success",
      token: "Bearer " + accessToken,
      isLoggedIn: true,
    });
    console.log(res);
    return res;
  }
);

recordRoutes.route("/user/getUsername").get(verifyJWT, (req, res) => {
  res.json({ isLoggedIn: true, username: req.user.username });
});

module.exports = recordRoutes;