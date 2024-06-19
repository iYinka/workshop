"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _passport = _interopRequireDefault(require("passport"));
var _auth = require("../../controllers/auth/auth.js");
var _entries = require("../../controllers/entries.js");
var _private = require("../../middleware/private.js");
var _userModel = _interopRequireDefault(require("../../model/userModel.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();

// PASSPORT ROUTES
// router.get("/contacts", (req, res) => {
//     if (req.user) {
//         res.status(200).json({
//             error: false,
//             message: "Successfully logged in",
//             user: req.user,
//         });
//     } else {
//         res.status(403).json({ error: true, message: "Not Authorized!" });
//     }
// });
// router.get("/", (req, res) => {
//     res.status(401).json({ error: true, message: "Log in failure" });
// });
// router.get(
//     "/google/callback",
//     passport.authenticate("google", {
//         successRedirect: process.env.CLIENT_URL,
//         failureRedirect: "/",
//     })
// );
// router.get("/google", passport.authenticate("google", ["profile", "email"]));
// router.get("/logout", (req, res) => {
//     req.logout();
//     res.redirect(process.env.CLIENT_URL);
// });
// GOOGLE ROUTES ends

// AUTH ROUTES
router.post("/register_user", (0, _auth.errorHandler)(_auth.registerUser));
router.post("/login_user", (0, _auth.errorHandler)(_auth.loginUser));
router["delete"]("/delete_user", _private.privacy, (0, _auth.errorHandler)(_auth.deleteUser));

// CONTACTS ROUTES
router.get("/contacts/", _private.privacy, _entries.getAllContacts);
router.get("/contacts/:id", _private.privacy, _entries.getContact);
router.post("/contacts/create", _private.privacy, _entries.createContact);
router.patch("/contacts/update/:id", _private.privacy, _entries.updateContact);
router["delete"]("/contacts/delete/:id", _private.privacy, _entries.deleteContact);

// To Get occupations
router.get("/occupations", _entries.getOccupations);
var _default = exports["default"] = router;
//# sourceMappingURL=index.js.map