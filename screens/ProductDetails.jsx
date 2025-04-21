import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const fashionItems = [
  {
    id: '1',
    name: 'Floral Summer Dress',
    price: '$49.99',
    image: 'https://images.unsplash.com/photo-1520975911041-7a654d41fbee?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '2',
    name: 'Denim Jacket',
    price: '$59.99',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224c28e?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '3',
    name: 'High Heels',
    price: '$39.99',
    image: 'https://images.unsplash.com/photo-1600185366133-3f2c04a04550?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '4',
    name: 'Leather Handbag',
    price: '$79.99',
    image: 'https://images.unsplash.com/photo-1626899798511-fba0e1b2ecdb?auto=format&fit=crop&w=500&q=60',
  },
];

const ProductDetails = () => {
  const renderFashionItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  );

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

        {/* Ladies Fashion Section */}
        <View style={styles.section}>
          <Text style={styles.fashionTitle}>Explore Ladies' Fashion</Text>
          <FlatList
            data={fashionItems}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={renderFashionItem}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.fashionList}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
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
    letterSpacing: 5,
  },
  subItem: {
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 12,
    color: "gray",
  },
  fashionTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 16,
  },
  fashionList: {
    paddingBottom: 10,
  },
  itemContainer: {
    width: 160,
    marginRight: 16,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
  },
  itemImage: {
    width: 130,
    height: 130,
    borderRadius: 10,
    resizeMode: "cover",
  },
  itemName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  itemPrice: {
    fontSize: 13,
    color: "green",
    marginTop: 4,
  },
});

export default ProductDetails;
