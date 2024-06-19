"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerUser = exports.loginUser = exports.errorHandler = exports.deleteUser = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _userModel = _interopRequireDefault(require("../../model/userModel.js"));
var _validationSchema = require("../validationSchema.js");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _passport = _interopRequireDefault(require("passport"));
var _mongooseFindorcreate = _interopRequireDefault(require("mongoose-findorcreate"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
_dotenv["default"].config();
// import { Strategy as FacebookStrategy } from "passport-facebook";
// import { GoogleStrategy } from "passport-google-oauth20";

// http://127.0.0.1:3000/auth/google/my_contacts

// ERROR HANDLER
var errorHandler = exports.errorHandler = function errorHandler(fn) {
  return function (req, res, next) {
    return Promise.resolve(fn(req, res, next))["catch"](next);
  };
};

// REGISTRATION

// FOR HASHING AND SALTING
var registerUser = exports.registerUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, name, email, password, _registerSchema$valid, error, emailExists, saltRounds, salt, hash, newUser, savedUser;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;
          _registerSchema$valid = _validationSchema.registerSchema.validate(req.body), error = _registerSchema$valid.error;
          if (!error) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(400).send({
            message: error.details[0].message
          }));
        case 4:
          _context.next = 6;
          return _userModel["default"].findOne({
            email: req.body.email
          });
        case 6:
          emailExists = _context.sent;
          if (!emailExists) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", res.json({
            msg: "Email already exists"
          }));
        case 9:
          // Creating with passport
          // const newUser = new User({
          //     name: name,
          //     email: email,
          //     password: hash,
          // });
          // User.register({ username: email }, password, function (err, user) {
          //     if (err) {
          //         console.log(err);
          //         res.redirect("/register");
          //     } else {
          //         passport.authenticate("local")(req, res, function () {
          //             res.redirect("/secrets");
          //         });
          //     }
          // });
          saltRounds = 12;
          _context.next = 12;
          return _bcryptjs["default"].genSalt(saltRounds);
        case 12:
          salt = _context.sent;
          _context.next = 15;
          return _bcryptjs["default"].hash(password, salt);
        case 15:
          hash = _context.sent;
          newUser = new _userModel["default"]({
            name: name,
            email: email,
            password: hash
          });
          _context.prev = 17;
          _context.next = 20;
          return newUser.save();
        case 20:
          savedUser = _context.sent;
          if (!savedUser) {
            _context.next = 25;
            break;
          }
          res.status(201).json({
            id: savedUser.id,
            name: savedUser.name,
            email: savedUser.email,
            password: savedUser.password,
            accessToken: generateToken(savedUser.id)
          });
          _context.next = 27;
          break;
        case 25:
          res.status(400);
          throw new Error("Invalid credentials");
        case 27:
          _context.next = 32;
          break;
        case 29:
          _context.prev = 29;
          _context.t0 = _context["catch"](17);
          console.log(_context.t0);
        case 32:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[17, 29]]);
  }));
  return function registerUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var loginUser = exports.loginUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _loginSchema$validate, error, _req$body2, email, password, user, validPass;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _loginSchema$validate = _validationSchema.loginSchema.validate(req.body), error = _loginSchema$validate.error;
          if (!error) {
            _context2.next = 3;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: error.details[0].message
          }));
        case 3:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password; // Validate if user exist in our database
          _context2.next = 6;
          return _userModel["default"].findOne({
            email: email
          });
        case 6:
          user = _context2.sent;
          if (!user) {
            _context2.next = 18;
            break;
          }
          _context2.next = 10;
          return _bcryptjs["default"].compare(password, user.password);
        case 10:
          validPass = _context2.sent;
          if (!validPass) {
            _context2.next = 15;
            break;
          }
          res.status(201).json({
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
              date: user.date,
              accessToken: generateToken(user.id)
            },
            message: "Login successful"
          });
          _context2.next = 16;
          break;
        case 15:
          return _context2.abrupt("return", res.status(401).send({
            status: "Fail",
            message: "Unauthorized user"
          }));
        case 16:
          _context2.next = 19;
          break;
        case 18:
          return _context2.abrupt("return", res.status(404).send({
            status: "Fail",
            message: "User not found"
          }));
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function loginUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// DELETE USER BY ID
var deleteUser = exports.deleteUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _userModel["default"].findByIdAndDelete(req.user.id);
        case 3:
          res.json({
            status: "Success",
            message: "User deleted"
          });
          _context3.next = 9;
          break;
        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            err: _context3.t0.message || "Can not delete user . Maybe user not found!"
          });
        case 9:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 6]]);
  }));
  return function deleteUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// Generate TOKEN
var generateToken = function generateToken(id) {
  return _jsonwebtoken["default"].sign({
    id: id
  }, process.env.TOKEN_SECRET, {
    expiresIn: "1d"
  });
};
//# sourceMappingURL=auth.js.map