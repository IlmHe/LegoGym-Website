const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const bcrypt = require('bcryptjs');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt
const { getUserLogin } = require('../Models/userModel');

// local strategy for username password login
passport.use(new Strategy(
    async (username, password, done) => {
      const params = [username];
      try {
        const [user] = await getUserLogin(params);
        console.log('Local strategy', user); // result is binary row
        if (user === undefined) {
          return done(null, false, {message: 'Incorrect credentials.'});
        }
        if (!await bcrypt.compare(password, user.password)) {
          return done(null, false, {message: 'Incorrect credentials.'});
        }
        // avoid that password travel around (even if it's hashed...)
        delete user.password;
        return done(null, {...user}, {message: 'Logged In Successfully'}); // use spread syntax to create shallow copy to get rid of binary row type
      } catch (err) {
        return done(err);
      }
    }));
// TODO: consider .env for secret, e.g. secretOrKey: process.env.JWT_SECRET
passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'ncaösdkljvdöhgbvn'
}, (jwtPayload, done) => {
  done(null, jwtPayload);
}));

module.exports = passport;
