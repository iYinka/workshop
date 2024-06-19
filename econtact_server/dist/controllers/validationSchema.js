"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerSchema = exports.loginSchema = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var registerSchema = exports.registerSchema = _joi["default"].object({
  name: _joi["default"].string().min(6).required(),
  email: _joi["default"].string().min(6).required().email(),
  password: _joi["default"].string().min(6).required()
});
var loginSchema = exports.loginSchema = _joi["default"].object({
  email: _joi["default"].string().email({
    tlds: {
      allow: false
    }
  }),
  // email: Joi.string().min(6).required().email(),
  // password: Joi.string().min(6).required(),
  password: _joi["default"].string().min(8).max(25)
});
//# sourceMappingURL=validationSchema.js.map