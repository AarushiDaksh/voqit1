import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Animated
} from "react-native";

export const HomeScreen = () => {
  const fadeAnim1 = useRef(new Animated.Value(0)).current; // For first image
  const fadeAnim2 = useRef(new Animated.Value(0)).current; // For second image
  const translateY1 = useRef(new Animated.Value(50)).current;
  const translateY2 = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    // Animate the first image
    Animated.timing(fadeAnim1, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateY1, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();

    // Animate the second image with a delay
    setTimeout(() => {
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();

      Animated.timing(translateY2, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 400); // Delay for smoother effect
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.backgroundContainer}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../assets/black-bg.jpg")}
          style={styles.backgroundImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.fontTop}>Free shipping above ₹1999</Text>
        </View>

        {/* First Image with Animation */}
        <Animated.Image
          source={require("../assets/first-img.jpg")}
          style={[
            styles.image,
            { opacity: fadeAnim1, transform: [{ translateY: translateY1 }] }
          ]}
        />

        <View style={styles.middleTextContainer}>
          <Text style={styles.middleText}>JOIN OUR NEWSLETTER</Text>
          <Text style={styles.middleTextSmall}>
            NAME AND ADDRESS OF THE MANUFACTURER:{"\n"}
            INDUSTRIA DE DISEÑO TEXTIL, S.A. (INDITEX, S.A.){"\n"}
            AVENIDA DE LA DIPUTACIÓN, EDIFICIO INDITEX,{"\n"}
            15143, ARTEIXO (A CORUÑA), SPAIN
          </Text>
        </View>

        {/* Second Image with Animation */}
        <View style={styles.imageWrapper}>
          <Animated.Image
            source={require("../assets/Second-img.jpg")}
            style={[
              styles.image2,
              { opacity: fadeAnim2, transform: [{ translateY: translateY2 }] }
            ]}
          />
          <View style={styles.overlayTextContainer}>
            <Text style={styles.overlayText}>The Ultimate Fashion</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    position: "relative",
    backgroundColor: "#000",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textContainer: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -150 }],
    width: 300,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  fontTop: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "monospace",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    marginTop: 50,
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    alignItems: "center",
    marginTop: 50,
  },
  image2: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  overlayTextContainer: {
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: [{ translateX: -125 }],
    backgroundColor: "rgba(255, 249, 249, 0.6)",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  overlayText: {
    fontSize: 20,
    fontWeight: "900",
    fontFamily: "sans-serif",
    textTransform: "uppercase",
    color: "#ff007f",
    letterSpacing: -2,
  },
  middleTextContainer: {
    width: "90%",
    alignSelf: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 35,
  },
  middleText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  middleTextSmall: {
    color: "#ccc",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 18,
  },
});

export default HomeScreen;
