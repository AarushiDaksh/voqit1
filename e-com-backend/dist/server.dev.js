"use strict";

require("dotenv").config();

var express = require("express");

var cors = require("cors");

var twilio = require("twilio");

var bodyParser = require("body-parser");

var app = express();
app.use(cors());
app.use(bodyParser.json());
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
var serviceSid = process.env.TWILIO_SERVICE_SID;
var client = twilio(accountSid, authToken); // Root Route

app.get("/", function (req, res) {
  res.send("Twilio OTP API is running...");
});
app.post("/send-otp", function _callee(req, res) {
  var phone, verification;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          phone = req.body.phone;
          console.log("Phone num:", phone);
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(client.verify.v2.services(serviceSid).verifications.create({
            to: "+91".concat(phone),
            channel: "sms"
          }));

        case 5:
          verification = _context.sent;
          res.status(200).json({
            success: true,
            message: "OTP sent successfully"
          });
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          console.log(_context.t0);
          res.status(500).json({
            success: false,
            message: "Failed to send OTP",
            error: _context.t0
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 9]]);
});
app.post("/verify-otp", function _callee2(req, res) {
  var _req$body, phone, otp, verificationCheck;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, phone = _req$body.phone, otp = _req$body.otp;
          console.log("Verifying OTP for:", phone, "OTP:", otp);
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(client.verify.v2.services(serviceSid).verificationChecks.create({
            to: "+91".concat(phone),
            code: otp
          }));

        case 5:
          verificationCheck = _context2.sent;

          if (verificationCheck.status === "approved") {
            res.status(200).json({
              success: true,
              message: "OTP verified successfully"
            });
          } else {
            res.status(400).json({
              success: false,
              message: "Invalid OTP"
            });
          }

          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](2);
          console.log(_context2.t0);
          res.status(500).json({
            success: false,
            message: "Failed to verify OTP",
            error: _context2.t0
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 9]]);
}); // Start Server

var PORT = 5000;
app.listen(PORT, function () {
  return console.log("Server started at:", PORT);
});