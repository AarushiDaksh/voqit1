import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Main");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/splash-anim.json")}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", 
  },
  animation: {
    position: "absolute", 
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

