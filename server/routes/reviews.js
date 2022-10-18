// get JWT functions
const { generateJWT, verifyJWT } = require("../utils/tokenUtils");

const express = require("express");
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
// const dbo = require("../db/conn");
const Review = require("../models/review");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the reviews.
recordRoutes.route("").get(function (req, res) {
  Review.find({})
    .lean()
    .exec((err, result) => {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/:id").get(function (req, res) {
  Review.findOne({ _id: ObjectId(req.params.id) }).exec((err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new record.
recordRoutes.route("/add").post(verifyJWT, function (req, response) {
  const dbReview = new Review({
    ...req.body,
    ...{ userId: req.user.id },
  });

  dbReview.save();
  response.json({ message: "Success" });
  console.log("1 document added");
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(verifyJWT, function (req, response) {
  Review.findOneAndUpdate(
    { _id: ObjectId(req.params.id) },
    { $set: req.body },
    (err, res) => {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    }
  );
});

// This section will help you delete a record
recordRoutes.route("/:id").delete(verifyJWT, (req, response) => {
  Review.findOneAndDelete({ _id: ObjectId(req.params.id) }).exec((err, obj) => {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;
