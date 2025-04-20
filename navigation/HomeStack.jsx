import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CustomHeader from "../components/CustomHeader";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import CheckOutScreen from "../screens/CheckOutScreen";

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <>
      <CustomHeader /> 
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Scan" component={CheckOutScreen} />
      </Stack.Navigator>
    </>
  );
}

export default HomeStack;
