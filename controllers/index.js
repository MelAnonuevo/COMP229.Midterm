// Filename: COMP229002-W2022-Midterm-301167069
// Author: Mel Vincent Anonuevo
// Student ID: 301167069
// WebApp Name: Favorite Movie List

exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
