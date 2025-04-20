import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Animated,
  Dimensions,
} from "react-native";

const { height } = Dimensions.get("window");

export const HomeScreen = () => {
  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const translateY1 = useRef(new Animated.Value(50)).current;
  const translateY2 = useRef(new Animated.Value(50)).current;

  useEffect(() => {
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
    }, 400);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Background image */}
      <Image
        source={require("../assets/black-bg.jpg")}
        style={styles.backgroundImage}
      />
            <View style={styles.fixedBrandTextContainer}>
        <Text style={styles.fixedBrandText}>VOQIT</Text>
      </View>
      <View style={styles.topBanner}>
          <Text style={styles.topBannerText}>25% OFF SELECTED STYLES | MEMBER EXCLUSIVE</Text>
          <View style={styles.topBannerNav}>
            <Text style={[styles.navTab, styles.activeTab]}>LADIES</Text>
            <Text style={styles.navTab}>MEN</Text>
            <Text style={styles.navTab}>KIDS</Text>
            <Text style={styles.navTab}>HOME</Text>
          </View>
        </View>
      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.heroWrapper}>
          <Animated.Image
            source={require("../assets/2.jpg")}
            style={[
              styles.heroImage,
              { opacity: fadeAnim1, transform: [{ translateY: translateY1 }] },
            ]}
          />
          <View style={styles.heroTextContainer}>
            <View style={styles.heroButton}>
              <Text style={styles.heroButtonText}>SHOP NOW</Text>
            </View>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.fontTop}>Free shipping above ₹1999</Text>
        </View>
        <View style={styles.imageWrapper}>
          <Animated.Image
            source={require("../assets/4.jpg")}
            style={[
              styles.image2,
              { opacity: fadeAnim2, transform: [{ translateY: translateY2 }] },
            ]}
          />
          <View style={styles.overlayTextContainer}>
            <Text style={styles.overlayText}>The Ultimate Fashion</Text>
          </View>
        </View>


        <View style={styles.middleTextContainer}>
          <Text style={styles.middleText}>JOIN OUR NEWSLETTER</Text>
          <Text style={styles.middleTextSmall}>
            BE THE FIRST TO EXPERIENCE{"\n"}
            LUXURY COLLECTION DROPS, PRIVATE SALES,{"\n"}
            AND TAILORED STYLE EDITS.{"\n\n"}
            CURATED FOR THE MODERN CONNOISSEUR.{"\n"}
            POWERED BY VOQIT.FASHION.IN{"\n"}
            HOUSE OF TIMELESS STYLE AND ELEGANCE
          </Text>

        </View>

        {/* <View style={styles.imageWrapper2}>
          <Animated.Image
            source={require("../assets/11.jpg")}
            style={[
              styles.image3,
              { opacity: fadeAnim2, transform: [{ translateY: translateY2 }] },
            ]}
          />
           <View style={styles.overlayTextContainer2}>
            <Text style={styles.overlayText2}>3000/-</Text>
          </View> */}
{/*           
        </View> */}
       
      </ScrollView>


      <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>
            PRIVACY POLICY | TERMS & CONDITIONS | COOKIES
          </Text>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    zIndex: -1,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  textContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  fontTop: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "monospace",
  },
  heroWrapper: {
    width: "100%",
    // height: height * 0.7,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0, // <-- make sure this is present
    paddingTop: 0, // <-- ensures no extra spacing
  },
  heroImage: {
    width: "100%",
    height: "500", // <-- use 100% to fill heroWrapper
    resizeMode: "cover",
    marginTop: 0,
    // borderBottomEndRadius: 150, // <-- keep this too
  },
  
  heroTextContainer: {
    position: "absolute",
    bottom: 80,
    alignItems: "center",
    zIndex:10,
  },
 
  heroButton: {
    backgroundColor: "#fff",
    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
  },
  heroButtonText: {
    fontWeight: "bold",
    color: "#000",
  },
  middleTextContainer: {
    width: "90%",
    alignSelf: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
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
    marginBottom: 20,
  },
  imageWrapper: {
    marginTop: 40,
    marginBottom: 80,
    alignItems: "center",
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
    color: "black",
    letterSpacing: -2,
  },
  fixedBrandTextContainer: {
    position: "absolute",
    top: 150, // Adjust as needed
    left: 0,
    right: 0,
    zIndex: 20,
    alignItems: "center",
    fontWeight: "bold",
  },
  
  fixedBrandText: {
    color: "#fff",
    fontSize: 60,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  imageWrapper2: {
    marginTop: 40,
    marginBottom: 80,
    alignItems: "center",
  },
  image3: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderBottomStartRadius:150,
  },
  overlayTextContainer2: {
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: [{ translateX: -125 }],
    
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  overlayText2: {
    fontSize: 10,
    fontFamily: "sans-serif",
    textTransform: "uppercase",
    color: "white",
    letterSpacing:1,
  },
  topBanner: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  
  topBannerText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
    color: '#222',
    textTransform: 'uppercase',
  },
  
  topBannerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  
  navTab: {
    fontSize: 14,
    color: '#999',
    fontWeight: '500',
  },
  
  activeTab: {
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  bottomTextContainer: {
  position: 'absolute',
  bottom:60,
  width: '100%',
  backgroundColor: '#f9f9f9',
  paddingVertical: 10,
  alignItems: 'center',
  borderTopWidth: 1,
  borderTopColor: '#eee',
},

bottomText: {
  fontSize: 12,
  color: '#777',
  textAlign: 'center',
  textTransform: 'uppercase',
},
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  
});

export default HomeScreen;
