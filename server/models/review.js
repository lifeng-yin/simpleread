const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: false
    },
    rating: {
        type: String,
        required: true
    },
    bookId: {
        type: String,
        required: true
    }
})

const Review = mongoose.model("Review", reviewSchema, "reviews")

module.exports = Review