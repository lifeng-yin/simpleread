const mongoose = require("mongoose")
const dotenv = require('dotenv').config()

const uri = 'mongodb+srv://simpleread-1:simpleread1@cluster0.bdmmz.mongodb.net/simpleread?retryWrites=true&w=majority'
 
 
module.exports = {
  connectToServer: function (callback) {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then (() => { console.log("Successfully connected to MongoDB.") },
    (err) => {
      return callback(err);
    });
  },
};