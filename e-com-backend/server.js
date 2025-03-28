require("dotenv").config();
const express = require("express");
const cors = require("cors");
const twilio = require("twilio");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.TWILIO_SERVICE_SID;

const client = twilio(accountSid, authToken);

// Root Route
app.get("/", (req, res) => {
    res.send("Twilio OTP API is running...");
});

// ✅ Send OTP
app.post("/send-otp", async (req, res) => {
    const { phone } = req.body;
    console.log("Phone num:", phone);
    try {
        const verification = await client.verify.v2
            .services(serviceSid)
            .verifications.create({
                to: `+91${phone}`,
                channel: "sms",
            });

        res.status(200).json({ success: true, message: "OTP sent successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to send OTP", error });
    }
});

// ✅ Verify OTP
app.post("/verify-otp", async (req, res) => {
    const { phone, otp } = req.body;
    console.log("Verifying OTP for:", phone, "OTP:", otp);

    try {
        const verificationCheck = await client.verify.v2
            .services(serviceSid)
            .verificationChecks.create({
                to: `+91${phone}`,
                code: otp,
            });

        if (verificationCheck.status === "approved") {
            res.status(200).json({ success: true, message: "OTP verified successfully" });
        } else {
            res.status(400).json({ success: false, message: "Invalid OTP" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to verify OTP", error });
    }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log("Server started at:", PORT));

