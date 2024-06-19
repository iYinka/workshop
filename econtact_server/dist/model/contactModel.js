"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Model = _mongoose["default"].Model,
  Schema = _mongoose["default"].Schema;
var ObjectId = _mongoose["default"].Schema.Types.ObjectId;
var reqString = {
  type: String,
  required: true
};
var reqUniqueNumber = {
  type: Number,
  required: true,
  unique: true
};
var bool = {
  type: Boolean,
  required: true,
  "default": false
};
var num = {
  type: Number
};
var string = {
  type: String
};
var contactSchema = new _mongoose["default"].Schema({
  user: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User"
  },
  name: reqString,
  email: reqString,
  phoneNumber: reqUniqueNumber,
  description: string,
  isActive: bool
}, {
  timestamps: true
});
contactSchema.set("toJSON", {
  transform: function transform(document, returnedObject) {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});
var Contact = _mongoose["default"].model("contact", contactSchema);
var _default = exports["default"] = Contact;
//# sourceMappingURL=contactModel.js.map