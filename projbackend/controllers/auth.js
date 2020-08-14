const User = require('../models/user');

const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.signin = function(req, res){
    passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/'
    })
}

exports.signup = function(req, res){
    let userdetails = new User({
        email: req.body.email,
        username: req.body.username
    })
    User.register(userdetails, req.body.password)
        .then(function(registeredUser){
            passport.authenticate('local')(req, res, function(){
                res.redirect('/profile');
            })
        })
}

exports.signout = function(req, res){
    req.logOut();
    res.redirect('/')
}

exports.isSignedIn = function(req, res, next){
    if(req.isAuthenticated()){
        next();
    }
    else{
        req.flash('status', 'You need to login first');
        res.redirect('/login');
    }
}

