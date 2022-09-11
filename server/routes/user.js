// get JWT functions
const { generateJWT, verifyJWT } = require("../utils/tokenUtils");

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
const saltRounds = 10;
require("dotenv").config({ path: "../config.env" });

// This section will help you create a new record.
recordRoutes.route("/user/register").post(async function (req, res) {
  const user = req.body;

  // check whether user already exists
  if (await User.findOne({ username: user.username })) {
    res.json({ message: "Username already exists" });
  } else if (await User.findOne({ email: user.email })) {
    res.json({ message: "Email already exists" });
  } else {
    user.password = await bcrypt.hash(req.body.password, saltRounds);

    const dbUser = new User({
      username: user.username,
      email: user.email.toLowerCase(),
      password: user.password,
    });

    dbUser.save();

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
      user: {
        username: dbUser.username,
      },
      isLoggedIn: true,
    });

    console.log("1 user added");
    return res;
  }
});

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
            user: {
              username: dbUser.username,
            },
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
      user: {
        username: req.user.username,
      },
      isLoggedIn: true,
    });
    console.log("token refreshed");
    return res;
  }
);

recordRoutes.route("/user/getUsername").get(verifyJWT, (req, res) => {
  res.json({ isLoggedIn: true, username: req.user.username });
});

module.exports = recordRoutes;
