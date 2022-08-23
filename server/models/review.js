const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    }
})

const Review = mongoose.model("Review", reviewSchema, "reviews")

module.exports = Review