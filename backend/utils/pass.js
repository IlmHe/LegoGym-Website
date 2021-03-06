'use strict';
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const bcrypt = require('bcrypt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const {getUserLogin} = require('../models/userModel');

// local strategy for username password login
passport.use(new Strategy(
    async (Username, Password, done) => {
      const params = [Username];
      try {
        const [user] = await getUserLogin(params);
        console.log('Local strategy', user); // result is binary row
        if (user === undefined) {
          return done(null, false, {message: 'Incorrect email.'});
        }

        if (!await bcrypt.compare(Password, user.Password)) {
          return done(null, false, {message: 'Incorrect password.',user});
        }

        delete user.Password;
        return done(null, {...user}, {message: 'Logged In Successfully'}); // use spread syntax to create shallow copy to get rid of binary row type
      } catch (err) {
        return done(err);
      }
    }));

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'ncaösdkljvdöhgbvn'
}, async (jwtPayload, done) => {

   done(null, jwtPayload);
}));

module.exports = passport;