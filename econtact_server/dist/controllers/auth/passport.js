"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleAuth = void 0;
var _passportGoogleOauth = require("passport-google-oauth20");
var _userModel = _interopRequireDefault(require("../../model/userModel.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
////////////GOOGLE AUTH2.0///////////////
var GoogleAuth = exports.GoogleAuth = function GoogleAuth() {
  // eslint-disable-next-line no-undef
  passport.use(new _passportGoogleOauth.GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    scope: ["profile", "email"]
  }, function (accessToken, refreshToken, profile, callback) {
    console.log(profile);
    callback(null, profile);
    _userModel["default"].findOrCreate({
      googleId: profile.id
    }, function (err, user) {
      return callback(err, user);
    });
  }));

  //This serialization of session works for all OAuth.
  // eslint-disable-next-line no-undef
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  // eslint-disable-next-line no-undef
  passport.deserializeUser(function (id, done) {
    _userModel["default"].findById(id, function (err, user) {
      done(err, user);
    });
  });
};
//# sourceMappingURL=passport.js.map