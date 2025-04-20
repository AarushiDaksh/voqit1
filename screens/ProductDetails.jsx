import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


const ProductDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      
        {/* Promo Bar */}
        <View style={styles.promoBar}>
          <Text style={styles.promoText}>
            25% OFF SELECTED STYLES | MEMBER EXCLUSIVE
          </Text>
          <Text style={styles.shopNow}>SHOP NOW +</Text>
        </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#666"
            style={styles.searchInput}
          />
          <MaterialIcons name="camera-alt" size={20} color="#666" />
          <MaterialIcons name="crop-free" size={20} color="#666" />
        </View>

        {/* Main Categories */}
        <View style={styles.section}>
          <Text style={styles.mainItem}>LADIES</Text>
          <Text style={styles.mainItem}>MEN</Text>
          <Text style={styles.mainItem}>KIDS</Text>
          <Text style={styles.mainItem}>HOME</Text>
        </View>

        {/* Submenu */}
        <View style={styles.section}>
          <Text style={styles.subItem}>SUSTAINABILITY</Text>
          <Text style={styles.subItem}>INBOX [7]</Text>
          <Text style={styles.subItem}>CUSTOMER SERVICE</Text>
          <Text style={styles.subItem}>STORE LOCATOR</Text>
          <Text style={styles.subItem}>FOLLOW US</Text>
          <Text style={styles.subItem}>GIFT CARD</Text>
          <Text style={styles.subItem}>APP SETTINGS</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
  },
  promoBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 6,
    marginBottom: 12,
  },
  promoText: {
    fontSize: 12,
    fontWeight: "500",
    flex: 1,
    flexWrap: "wrap",
    marginRight: 10,
  },
  shopNow: {
    fontSize: 12,
    fontWeight: "500",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 10,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  section: {
    marginBottom: 30,
  },
  mainItem: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 12,
    letterSpacing:5,
  },
  subItem: {
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 12,
    color:"gray",
  },
});

export default ProductDetails;
