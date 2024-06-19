"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _passportLocalMongoose = _interopRequireDefault(require("passport-local-mongoose"));
var _mongooseFindorcreate = _interopRequireDefault(require("mongoose-findorcreate"));
var _passport = _interopRequireDefault(require("passport"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Model = _mongoose["default"].Model,
  Schema = _mongoose["default"].Schema;
var reqString = {
  type: String,
  required: "Please enter a value"
};
var reqUniqueString = {
  type: String,
  required: "Please enter an email address",
  unique: true,
  trim: true,
  lowercase: true
};
var userSchema = new Schema({
  name: reqString,
  email: reqUniqueString,
  password: reqString,
  googleId: String,
  facebookId: String,
  date: {
    type: Date,
    "default": Date.now
  }
}, {
  timestamps: true
});
userSchema.set("toJSON", {
  transform: function transform(document, returnedObject) {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  }
});

//PLUGINs
userSchema.plugin(_passportLocalMongoose["default"]); //FOR THE HASHING AND CRYPTING
userSchema.plugin(_mongooseFindorcreate["default"]);
var User = _mongoose["default"].model("user", userSchema);
_passport["default"].use(User.createStrategy());
var _default = exports["default"] = User;
//# sourceMappingURL=userModel.js.map