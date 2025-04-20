import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Animated,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toastMsg, setToastMsg] = useState("");
  const [toastAnim] = useState(new Animated.Value(0));

  const showToast = (message) => {
    setToastMsg(message);
    Animated.timing(toastAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(toastAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }, 2000);
    });
  };

  const handleSubmit = () => {
    if (!email || !password) {
      showToast("Please fill in all fields");
      return;
    }

    if (isSignup) {
      console.log("Signing up with:", { email, password });
      showToast("Signup successful!");
      setIsSignup(false);
    } else {
      console.log("Logging in with:", { email, password });
      showToast("Login successful");
      setTimeout(() => navigation.replace("Main"), 1000);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Animated.View style={[styles.toast, { opacity: toastAnim }]}>
          <Text style={styles.toastText}>{toastMsg}</Text>
        </Animated.View>

        <Text style={styles.brand}>Voqit.Fashion</Text>
        <Text style={styles.title}>
          {isSignup ? "Create an account" : "Login to your account"}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            {isSignup ? "Sign Up" : "Login"}
          </Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
          <Text style={styles.toggleLink} onPress={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : "Sign Up"}
          </Text>
        </Text>

        <View style={styles.separator} />

        <Text style={styles.continueText}>Continue with</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={24} color="#db4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="apple" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="android" size={24} color="#3ddc84" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  brand: {
    fontSize: 40,
    fontWeight: "600",
    alignSelf: "center",
    letterSpacing: 2,
    marginBottom: 10,
    color: "#111",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 25,
    fontSize: 16,
    color: "#000",
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 25,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  footerText: {
    textAlign: "center",
    color: "#777",
  },
  toggleLink: {
    color: "#000",
    fontWeight: "500",
  },
  toast: {
    position: "absolute",
    top: 50,
    alignSelf: "center",
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    zIndex: 10,
  },
  toastText: {
    color: "#fff",
    fontSize: 14,
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 25,
  },
  continueText: {
    textAlign: "center",
    color: "#555",
    marginBottom: 15,
    fontSize: 14,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  socialButton: {
    padding: 12,
    borderRadius: 50,
    backgroundColor: "#f0f0f0",
    marginHorizontal: 10,
  },
});
