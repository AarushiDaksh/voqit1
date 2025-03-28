import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import axios from "axios";

const API_BASE_URL = "http://192.168.101.3:5000"; // Replace with your local network IP

export default function LoginScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const sendOtp = async () => {
    if (!phoneNumber) {
      Alert.alert("Error", "Please enter a valid phone number.");
      return;
    }

    try {
      await axios.post(`${API_BASE_URL}/send-otp`, { phone: phoneNumber });
      setOtpSent(true);
      Alert.alert("OTP Sent", "Check your phone for the OTP.");
    } catch (error) {
      console.error("Send OTP Error:", error.response?.data || error.message);
      Alert.alert("Error", "Failed to send OTP.");
    }
  };

  const verifyOtp = async () => {
      if (!otp) {
        Alert.alert("Error", "Please enter the OTP.");
        return;
      }

      try {
        const response = await axios.post(`${API_BASE_URL}/verify-otp`, {
          phone: phoneNumber,
          otp,
        });

        console.log("Frontend OTP Response:", response.data); // ✅ Log response

        // 🔥 FIX: Check if response contains success=true
        if (response.data.success) {
          Alert.alert("Success", "OTP Verified!");
          navigation.replace("Main"); // Navigate to home on success
        } else {
          Alert.alert("Error", response.data.message || "Invalid OTP. Please try again.");
        }
      } catch (error) {
        console.error("Verify OTP Error:", error.response?.data || error.message);
        Alert.alert("Error", "Failed to verify OTP.");
      }
  };


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{otpSent ? "Enter OTP" : "Enter Phone Number"}</Text>
        <TextInput
          style={styles.input}
          placeholder={otpSent ? "Enter OTP" : "Enter Phone Number"}
          placeholderTextColor="#ccc"
          keyboardType="phone-pad"
          value={otpSent ? otp : phoneNumber}
          onChangeText={(text) => (otpSent ? setOtp(text) : setPhoneNumber(text))}
        />
        <TouchableOpacity style={styles.button} onPress={otpSent ? verifyOtp : sendOtp}>
          <Text style={styles.buttonText}>{otpSent ? "Verify OTP" : "Send OTP"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "90%",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
  },
  button: {
    backgroundColor: "#ff007f",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
