import { GoogleStrategy } from "passport-google-oauth20";
import User from "../../model/userModel.js";

////////////GOOGLE AUTH2.0///////////////
export const GoogleAuth = () => {
    // eslint-disable-next-line no-undef
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: `auth/google/callback`,
                userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
                scope: ["profile", "email"],
            },
            function (accessToken, refreshToken, profile, callback) {
                console.log(profile);
                callback(null, profile);
                User.findOrCreate(
                    { googleId: profile.id },
                    function (err, user) {
                        return callback(err, user);
                    }
                );
            }
        )
    );

    //This serialization of session works for all OAuth.
    // eslint-disable-next-line no-undef
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // eslint-disable-next-line no-undef
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
};
