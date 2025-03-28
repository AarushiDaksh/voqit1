// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';

// // Import screens
// import HomeScreen from '../screens/HomeScreen';
// import SearchScreen from '../screens/SearchScreen';

// // Create the tab navigator
// const Tab = createBottomTabNavigator();

// export const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'Search') {
//               iconName = focused ? 'search' : 'search-outline';
//             }

//             // Return the appropriate icon
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'tomato', // Color for the active tab
//           tabBarInactiveTintColor: 'gray', // Color for the inactive tab
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Search" component={SearchScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;