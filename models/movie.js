// Filename: COMP229002-W2022-Midterm-301167069
// Author: Mel Vincent Anonuevo
// Student ID: 301167069
// WebApp Name: Favorite Movie List

let mongoose = require('mongoose');

// Create a model class
let movieModel = mongoose.Schema(
    {
        Title: String,
        Synopsis: String,
        Year: Number,
        Director: String,
        Genre: String
    },
    {
        collection: "movies"
    }
);

module.exports = mongoose.model('Movie', movieModel);