import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

// Import Screens
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import ScanScreen from "./screens/CheckOutScreen";
import LikedItemsScreen from "./screens/LikedItemsScreen";
import CartScreen from "./screens/CartScreen";
import ProductDetails from "./screens/ProductDetails";
import UserDetails from "./screens/UserDetails";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Function to add Search & Scan to the header
const screenOptions = ({ navigation }) => ({
  headerTitleAlign: "center",
  headerRight: () => (
    <>
     
      <TouchableOpacity
        onPress={() => navigation.navigate("Search")}
        style={{ marginRight: 15 }}
      >
        <Ionicons name="search" size={24} color="#ff007f" />
      </TouchableOpacity>

      
      <TouchableOpacity onPress={() => navigation.navigate("Scan")} style={{ marginRight: 20 }}>
        <Ionicons name="scan-outline" size={26} color="#ff007f" />
      </TouchableOpacity>
    </>
  ),
});

// Stack Navigator for Home & Other Screens
function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={screenOptions} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Scan" component={ScanScreen} />
    </Stack.Navigator>
  );
}

// Bottom Tabs Navigator
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Menu") iconName = "grid-outline";
          else if (route.name === "Cart") iconName = "cart";
          else if (route.name === "Liked") iconName = "heart";
          else if (route.name === "User") iconName = "person";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 60,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 5,
        },
        tabBarActiveTintColor: "#ff007f",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Menu" component={ProductDetails} options={screenOptions} />
      <Tab.Screen name="Liked" component={LikedItemsScreen} options={screenOptions} />
      <Tab.Screen name="Cart" component={CartScreen} options={screenOptions} />
      <Tab.Screen name="User" component={UserDetails} options={screenOptions} />
    </Tab.Navigator>
  );
}

// Auth Stack for Splash & Login
function AuthStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={BottomTabs} />
    </Stack.Navigator>
  );
}

// Main App
export default function App() {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}

// <Stack.Screen name="Login" component={LoginScreen} />